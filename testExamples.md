###Test Examples

##1. Create Game
  - __Given__ nothing
  - __When__ User inputs Create Game
  - __Then__ A game has been created

##2. Join Game
  - __Given__ That a game has been created
  - __When__ A user tries to join that game
  - __Then__ the user has joined that game

##3. Join Full Game
  - __Given__ That a game has been created, that someone has joined that game
  - __When__ A user joins that game
  - __Then__ the user will be notified that the game is full

##4. Player X wins horizontally
  - __Given__ [Placed(0, 0, X), Placed(0, 1, X)]
  - __When__ Placed(0, 2, X)
  - __Then__ X wins

##5. Player O wins Vertically
  - __Given__ [Placed(0, 0, O), Placed(1, 0, O)]
  - __When__ Placed(2, 0, O)
  - __Then__ O wins

##6. Player X wins from top left-bottom right
  - __Given__ [Placed(0, 0, X), Placed(1, 1, X)]
  - __When__ Placed(2, 2, X)
  - __Then__ X wins

##7. Player O wins from bottom left-top right
  - __Given__ [Placed(2, 0, O), Placed(1, 1, O)]
  - __When__ Placed(0, 2, O)
  - __Then__ O wins

##8. Draw!
  - __Given__ [Placed(0, 0, X), Placed(0, 1, X), Placed(0, 2, O)
  - Placed(1, 0, X), Placed(1, 1, O), Placed(1, 2, O), Placed(2, 0, X)
  - Placed(2, 1, O)]
  - __When__ Placed(2, 2, X)
  - __Then__ Game is a Draw

##9. Player O makes move at position X has made a move
  - __Given__ [Placed(0, 0, X)]
  - __When__ Placed(0, 0, O)
  - __Then__ Illegal move!

##10. Player O makes a move outside of grid (somehow)
  - __Given__ nothing
  - __When__ Placed(3, 0, O)
  - __Then__ Illegal move!

##11. Player O makes a move when it's not his turn
  - __Given__ It's player X's turn
  - __When__ Player O makes move
  - __Then__ Not your turn!

##12. Player X makes the first move
  - __Given__ Board is empty
  - __When__ X makes a move (e.g. Placed(1, 1, X))
  - __Then__ Move placed!

##13. Player X wins on last move
  - __Given__ [Placed(0, 0, O), Placed(0, 1, O), Placed(0, 2, X)
  - Placed(1, 0, O), Placed(1, 1, X), Placed(1, 2, X), Placed(2, 0, O)
  - Placed(2, 1, X)]
  - __When__ Placed(2, 2, X)
  - __Then__ X won
