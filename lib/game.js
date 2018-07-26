'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //game logic for minesweeper

// To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);
// game.playMove(1, 2);
// When done run `.exit`

//Matts new way to play
//To start a new game type: start(n,n,n)
//To flip a tile type: flip(n,n)

var _board = require('./board.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Game);

    this._board = new _board.Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  _createClass(Game, [{
    key: 'playMove',
    value: function playMove(rowIndex, columnIndex) {
      // this._board.print();

      this._board.flipTile(rowIndex, columnIndex);

      if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
        console.log('You hit a bomb. GAME OVER!');
        this._board.print();
      } else if (this._board.hasSafeTiles === true) {
        console.log('WINNER! There are no more safe tiles.');
      } else {
        console.log('Current Board');
        this._board.print();
      }
    }
  }]);

  return Game;
}();

;

//let game = new Game(3,3,8);
var game = void 0;
var start = function start(rows, colums, bombs) {
  game = new Game(rows, colums, bombs);
  console.log('New Game Board:');
  game._board.print();
};

var flip = function flip(rowIndex, columnIndex) {
  game._board.flipTile(rowIndex, columnIndex);

  if (game._board.playerBoard[rowIndex][columnIndex] === 'B') {
    console.log('You hit a bomb. GAME OVER!');
    game._board.print();
  } else if (game._board.hasSafeTiles === true) {
    console.log('WINNER! There are no more safe tiles.');
  } else {
    console.log('Current Board');
    game._board.print();
  }
};

//end
