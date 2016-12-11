var _ = require('lodash');

module.exports = function (injected) {

    return function (history) {

        var gamefull = false;
        var gamewon = false;

        function processEvent(event) {
          if(event.type=="GameJoined"){
            gamefull=true;
          }
          else if (event.type=="PlaceMove") {

          }
        }

        function processEvents(history) {
            _.each(history, processEvent);
        }

        function gameFull(){
            return gamefull;
        }

        function checkWin(){
            
        }

        processEvents(history);

        return {
            gameFull:gameFull,
            checkWin:checkWin,
            processEvents: processEvents
        }
    };
};
