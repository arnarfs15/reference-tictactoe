var _ = require('lodash');

module.exports = function (injected) {

    return function (history) {

        var gamefull = false;
        var board = new Array(9); // Going to use a board for checking win conditions for now, will likely refactor to event based checking

        function processEvent(event) {
          if(event.type=="GameJoined"){
            gamefull=true;
          }
          else if(event.type=="MovePlaced") {
            for(var i = 0; i < 3; i++){
                for(var j = 0; j < 3; j++){
                    var place = "[" + i + ", " + j + "]";
                    if(event.placement == place){
                        board[i*3+j] = event.side;
                    }
                }
            }
          }
        }

        function processEvents(history) {
            _.each(history, processEvent);
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
                  var place = "[" + i + ", " + j + "]";
                  val = i*3+j;
                  if(board[val] == event.side){
                      counter++
                  }
                  if(event.placement == place){
                      if(board[val] != 'O'){
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

        processEvents(history);

        return {
            gameFull:gameFull,
            checkWin:checkWin,
            processEvents: processEvents
        }
    };
};
