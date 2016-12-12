var should = require('should');
var _ = require('lodash');

var TictactoeState = require('./tictactoe-state')(inject({}));

var tictactoe = require('./tictactoe-handler')(inject({
    TictactoeState
}));

describe('Make move command', function() {

    var given, when, then;

    beforeEach(function(){
        given=undefined;
        when=undefined;
        then=undefined;
    });

    afterEach(function () {
        tictactoe(given).executeCommand(when, function(actualEvents){
            should(JSON.stringify(actualEvents)).be.exactly(JSON.stringify(then));
        });
    });

    it('should emit player X made a move', function() {
        given = [
          {
            type: "GameCreated",
            user: {
              userName: "Arnar"
            },
            name: "TicTacToeMasters",
            timeStamp: "2014-12-02T11:29:29"
          },
          {
              type: "GameJoined",
              user: {
                  userName: "Jónas"
              },
              name: "TicTacToeMasters",
              timeStamp: "2014-12-02T11:29:29",
              side:'O'
          }
        ];
        when =
          {
            type: "PlaceMove",
            user: {
                userName: "Arnar"
            },
            name: "TicTacToeMasters",
            timeStamp: "2014-12-02T11:30:18",
            placement: "[0, 0]",
            side: 'X'
          };
        then = [
          {
            type: "MovePlaced",
            user: {
              userName: "Arnar",
            },
            name: "TicTacToeMasters",
            timeStamp: "2014-12-02T11:30:18",
            placement: "[0, 0]",
            side: 'X'
          }
        ];
    });

    it('should emit player O made a move', function() {
      given = [
        {
          type: "GameCreated",
          user: {
            userName: "Arnar"
          },
          name: "TicTacToeMasters",
          timeStamp: "2014-12-02T11:29:29"
        },
        {
            type: "GameJoined",
            user: {
                userName: "Jónas"
            },
            name: "TicTacToeMasters",
            timeStamp: "2014-12-02T11:29:29",
            side:'O'
        },
        {
          type: "MovePlaced",
          user: {
              userName: "Arnar"
          },
          name: "TicTacToeMasters",
          timeStamp: "2014-12-02T11:30:18",
          placement: "[0, 0]",
          side: 'X'
        }
      ];
      when =
        {
          type: "PlaceMove",
          user: {
              userName: "Jónas"
          },
          name: "TicTacToeMasters",
          timeStamp: "2014-12-02T11:30:18",
          placement: "[1, 1]",
          side: 'O'
        };
      then = [
        {
          type: "MovePlaced",
          user: {
            userName: "Jónas",
          },
          name: "TicTacToeMasters",
          timeStamp: "2014-12-02T11:30:18",
          placement: "[1, 1]",
          side: 'O'
        }
      ];
    });
});

describe('Win game command', function() {

    var given, when, then;

    beforeEach(function(){
        given=undefined;
        when=undefined;
        then=undefined;
    });

    afterEach(function () {
        tictactoe(given).executeCommand(when, function(actualEvents){
            should(JSON.stringify(actualEvents)).be.exactly(JSON.stringify(then));
        });
    });


    it('Should emit player X won when X wins horizontally', function() {
        
    });

    it('should emit player O won when O wins Vertically', function() {
        /*given = [];
        when =
        {
          type: "PlaceMove"
        }
        then = [];
        */
    });

    it('should emit player X won when X wins from top-left to bottom-right', function() {
        /*given = [];
        when =
        {
          type: "PlaceMove"
        }
        then = [];
        */
    });

    it('should emit player O won when O wins from bottom-left to bottom-right', function() {
        /*given = [];
        when =
        {
          type: "PlaceMove"
        }
        then = [];
        */
    });

    it('should emit player X won when X wins on last move', function() {
        /*given = [];
        when =
        {
          type: "PlaceMove"
        }
        then = [];
        */
    });
});


describe('Draw game command', function() {
    var given, then, when;

    beforeEach(function() {
      given = undefined;
      then = undefined;
      when = undefined;
    });

    afterEach(function() {
      tictactoe(given).executeCommand(when, function(actualEvents) {
        should(JSON.stringify(actualEvents)).be.exactly(JSON.stringify(then));
      });
    });

    it('should emit Draw on last X move', function() {
        /*given = [];
        when =
        {
          type: "PlaceMove"
        }
        then = [];
        */
    });
});


describe('Illegal move command', function() {
    var given, then, when;

    beforeEach(function() {
      given = undefined;
      then = undefined;
      when = undefined;
    });

    afterEach(function() {
      tictactoe(given).executeCommand(when, function(actualEvents) {
          should(JSON.stringify(actualEvents)).be.exactly(JSON.stringify(then));
      });
    });

    it('should emit "Illegal move" when player O makes a move at a field with a move', function() {
        /*given = [];
        when =
        {
          type: "PlaceMove"
        }
        then = [];
        */
    });

    it('should emit "Not your turn" when player O makes a move at other turn', function() {
        /*given = [];
        when =
        {
          type: "PlaceMove"
        }
        then = [];
        */
    });

    it('should emit "Illegal move" when player X makes a move outside the grid', function() {
        /*given = [];
        when =
        {
          type: "PlaceMove"
        }
        then = [];
        */
    });
});
