
module.exports = function(injected){
    var TictactoeState = injected('TictactoeState');

    return function(history){

        var gameState = TictactoeState(history);

        return {
            executeCommand: function(cmd, eventHandler){

                var cmdHandlers = {
                    "CreateGame": function (cmd) {
                        eventHandler([{
                            gameId: cmd.gameId,
                            type: "GameCreated",
                            user: cmd.user,
                            name: cmd.name,
                            timeStamp: cmd.timeStamp,
                            side:'X'
                        }]);

                    },
                    "JoinGame": function (cmd) {
                        if(gameState.gameFull()){
                            eventHandler( [{
                                gameId: cmd.gameId,
                                type: "FullGameJoinAttempted",
                                user: cmd.user,
                                name: cmd.name,
                                timeStamp: cmd.timeStamp
                            }]);
                            return;
                        }

                        eventHandler([{
                            gameId: cmd.gameId,
                            type: "GameJoined",
                            user: cmd.user,
                            name: cmd.name,
                            timeStamp: cmd.timeStamp,
                            side:'O'
                        }]);
                    },
                    "PlaceMove": function(cmd){

                          //Checks if it's not your turn
                          if(!gameState.checkTurn(cmd)){
                              eventHandler([{
                                gameId: cmd.gameId,
                                type: "NotYourTurn",
                                user: cmd.user,
                                name: cmd.name,
                                timeStamp: cmd.timeStamp,
                                side: cmd.side
                              }])
                              return ;
                          }

                          //checks if the move is legal
                          if(gameState.illegalMove(cmd.placement)){
                            eventHandler([{
                              gameId: cmd.gameId,
                              type: "IllegalMove",
                              user: cmd.user,
                              name: cmd.name,
                              timeStamp: cmd.timeStamp,
                              side: cmd.side
                            }])
                            return;
                          }

                          //processes the movemade to enter the correct place into the board state

                          //define events as
                          var events = [{
                            gameId: cmd.gameId,
                            type: "MovePlaced",
                            user: cmd.user,
                            name: cmd.name,
                            timeStamp: cmd.timeStamp,
                            placement: cmd.placement,
                            side: cmd.side
                          }];

                          gameState.processEvents(events);

                          //checks if a move made won the game and adds it to events
                          if(gameState.checkWin(cmd)){
                              events.push({
                                gameId: cmd.gameId,
                                type: "GameWon",
                                user: cmd.user,
                                name: cmd.name,
                                timeStamp: cmd.timeStamp,
                                side: cmd.side
                              })
                          }
                          else if(gameState.checkDraw(cmd)){
                              events.push({
                                gameId: cmd.gameId,
                                type: "GameDraw",
                                name: cmd.name,
                                timeStamp: cmd.timeStamp
                              })
                          }

                          //sends all occurred events into the handler
                          eventHandler(events);
                    }
                };

                if(!cmdHandlers[cmd.type]){
                    throw new Error("I do not handle command of type " + cmd.type)
                }
                cmdHandlers[cmd.type](cmd);
            }
        }
    }
};
