var should = require('should');
var _ = require('lodash');

var TictactoeState = require('./tictactoe-state')(inject({}));

var tictactoe = require('./tictactoe-handler')(inject({
    TictactoeState
}));

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


    fit('Should emit player X won when X wins horizontally', function() {
        /*given = [];
        when =
        {
          type: "PlaceMove"
        }
        then = [];*/
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
