module.exports=function(injected){

    const io = require('socket.io-client');
    const RoutingContext = require('../../client/src/routing-context');
    const generateUUID = require('../../client/src/common/framework/uuid');

    var connectCount =0;

    function userAPI(){
        var waitingFor=[];
        var commandId=0;
        var gameId=0;
        var testUser1 = testUser1;
        var testUser2 = testUser2;


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
                routingContext.commandRouter.routeMessage({commandId:cmdId, gameId:gameId, type:"CreateGame", timeStamp: date});
                return me;
            },
            expectGameCreated:()=>{
              waitingFor.push("expectGameCreated");
              routingContext.eventRouter.on("GameCreated", function(game){;
                  waitingFor.pop();
              });
                return me;
            },
            getGame:()=>{
                return gameId;
            },
            joinGame:(gameId)=>{
                return me;
            },
            expectGameJoined:()=>{
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
