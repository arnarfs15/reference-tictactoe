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

        function illegalMove(placement){
            if(board[placement] === "X" || board[placement] === "O"){
                return true;
            }
            return false;
        }

        function gameFull(){
            return gamefull;
        }

        function checkWin(event){
            board[event.placement] = event.side;
            for(var i = 1; i < 9; i = i*3){
                if(board[i-1] === event.side){
                    if(board[i-1] == board[i] && board[i] == board[i+1]){
                        return true;
                    }
                }
            }
            for(var i = 0; i < 3; i++){
                if(board[i] === event.side){
                    if(board[i] == board[i+3] && board[i+3] == board[i+6]){
                        return true;
                    }
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
            illegalMove:illegalMove,
            checkTurn:checkTurn,
            gameFull:gameFull,
            checkWin:checkWin,
            processEvents: processEvents
        }
    };
};
