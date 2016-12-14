var _ = require('lodash');

module.exports = function (injected) {

    return function (history) {

        var gamefull = false;
        var board = new Array(9);
        var turn = 'X';

        function processEvent(event) {
          if(event.type=="GameJoined"){
            gamefull=true;
          }
          else if(event.type=="MovePlaced") {
            board[event.placement] = event.side;
            toggleTurn();
          }
        }

        function processEvents(history) {
            _.each(history, processEvent);
        }

        function checkTurn(event){
            if(event.side == turn){
                return true;
            }
            else{
                return false;
            }
        }

        function legalMove(event){
            return false;
        }

        function gameFull(){
            return gamefull;
        }

        function checkWin(event){
          var val, counter;
          for(var i = 0; i < 3; i++){
              counter = 0;
              for(var j = 0; j < 3; j++){
                  val = i*3+j;
                  console.debug(board[val]);
                  if(board[val] == event.side){
                      counter++;
                  }
                  if(event.placement == val){
                      if(board[val] != otherPlayer()){
                          counter++;
                      }
                  }
              }

              if(counter == 3){
                  return true;
              }

              counter = 0;
              for(var j = 0; j < 3; j++){
                  val = j*3+i;
                  if(board[val] == event.side){
                      counter++;
                  }
                  if(event.placement == val){
                      if(board[val] != otherPlayer()){
                          counter++;
                      }
                  }
              }

              if(counter == 3){
                  return true;
              }
          }
            return false;
        }

        function otherPlayer(player){
          if(player == 'X'){
            return 'O'
          }
          else{
            return 'X'
          }
        }

        function toggleTurn(){
          if(turn == 'X'){
            turn = 'O';
          }
          else{
            turn = 'X';
          }
        }

        processEvents(history);

        return {
            legalMove:legalMove,
            checkTurn:checkTurn,
            gameFull:gameFull,
            checkWin:checkWin,
            processEvents: processEvents
        }
    };
};
