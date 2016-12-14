var _ = require('lodash');

module.exports = function (injected) {

    return function (history) {

        var gamefull = false;
        var board = new Array(9); // Going to use a board for checking win conditions for now, will likely refactor to more event based checking
        var turn = 'X';

        function processEvent(event) {
          if(event.type=="GameJoined"){
            gamefull=true;
          }
          else if(event.type=="MovePlaced") {
            for(var i = 0; i < 3; i++){
                for(var j = 0; j < 3; j++){
                    var place = "{ x:" + i + ", y:" + j + " }";
                    if(event.coordinates == place){
                        board[i*3+j] = event.side;
                    }
                }
            }
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

        function checkLegality(event){
            return false;
        }

        function gameFull(){
            return gamefull;
        }

        //Will use loops for now to check win conditions, will refactor into more event based checks
        function checkWin(event){
          var val, counter;
          for(var i = 0; i < 3; i++){
              counter = 0;
              for(var j = 0; j < 3; j++){
                  var place = "{ x:" + i + ", y:" + j + " }"
                  val = i*3+j;
                  if(board[val] == event.side){
                      counter++;
                  }
                  if(event.coordinates == place){
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
                  var place = "{ x:" + j + ", y:" + i + " }"
                  val = j*3+i;
                  if(board[val] == event.side){
                      counter++;
                  }
                  if(event.coordinates == place){
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
            checkLegality:checkLegality,
            checkTurn:checkTurn,
            gameFull:gameFull,
            checkWin:checkWin,
            processEvents: processEvents
        }
    };
};
