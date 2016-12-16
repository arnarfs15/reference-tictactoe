module.exports=function(injected){

    const io = require('socket.io-client');
    const RoutingContext = require('../../client/src/routing-context');
    const generateUUID = require('../../client/src/common/framework/uuid');

    var connectCount =0;

    function userAPI(){
        var waitingFor=[];
        var commandId=0;
        var game = {};


        var routingContext = RoutingContext(inject({
            io,
            env:"test"
        }));

        connectCount++;
        const me = {
            expectUserAck:(cb)=>{
                waitingFor.push("expectUserAck");
                routingContext.socket.on('userAcknowledged', function(ackMessage){
                    expect(ackMessage.clientId).not.toBeUndefined();
                    waitingFor.pop();
                });
                return me;
            },
            sendChatMessage:(message)=>{
                var cmdId = generateUUID();
                routingContext.commandRouter.routeMessage({commandId:cmdId, type:"chatCommand", message });
                return me;
            },
            expectChatMessageReceived:(message)=>{
                waitingFor.push("expectChatMessageReceived");
                routingContext.eventRouter.on('chatMessageReceived', function(chatMessage){
                    expect(chatMessage.sender).not.toBeUndefined();
                    if(chatMessage.message===message){
                        waitingFor.pop();
                    }
                });
                return me;
            },
            cleanDatabase:()=>{
                var cmdId = commandId++;
                routingContext.commandRouter.routeMessage({commandId:cmdId, type:"cleanDatabase"});
                return me;

            },
            waitForCleanDatabase:()=>{
                waitingFor.push("expectChatMessageReceived");
                routingContext.eventRouter.on('databaseCleaned', function(chatMessage){
                    waitingFor.pop();
                });
                return me;

            },
            createGame:()=>{
                var cmdId = commandId++;
                gameId = generateUUID();
                var date = new Date().getTime();
                game = {commandId:cmdId, gameId:gameId, type:"CreateGame", timeStamp: date}
                routingContext.commandRouter.routeMessage(game);
                return me;
            },
            expectGameCreated:()=>{
              waitingFor.push("expectGameCreated");
              routingContext.eventRouter.on("GameCreated", function(Created){;
                  //console.log(Created)
                  waitingFor.pop();
              });
                return me;
            },
            getGame:()=>{
                return game;
            },
            joinGame:(gId)=>{
                var cmdId = commandId++;
                var date = new Date().getTime();
                game = {commandId:cmdId, gameId:gId, type: "JoinGame", timeStamp: date, side: 'O'}
                routingContext.commandRouter.routeMessage(game);
                return me;
            },
            expectGameJoined:()=>{
                waitingFor.push("expectGameJoined");
                routingContext.eventRouter.on("GameJoined", function(Joined){
                    //console.log(Joined);
                    waitingFor.pop();
                });
                return me;
            },
            placeMove:(x, y)=>{
                return me;
            },
            expectMoveMade:()=>{
                return me;
            },
            expectGameWon:()=>{
                return me;
            },
            then:(whenDoneWaiting)=>{
                function waitLonger(){
                    if(waitingFor.length>0){
                        setTimeout(waitLonger, 0);
                        return;
                    }
                    whenDoneWaiting();
                }
                waitLonger();
                return me;
            },
            disconnect:function(){
                routingContext.socket.disconnect();
            }


        };
        return me;

    }

    return userAPI;
};
