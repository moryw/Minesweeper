'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //game logic for minesweeper


var _board = require('./board');

var _board2 = _interopRequireDefault(_board);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports.default = Game;

var Game = function () {
  function Game(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Game);

    this._board = new _board2.default(numberOfRows, numberOfColumns, numberOfBombs);
  }

  _createClass(Game, [{
    key: 'playMove',
    value: function playMove(rowIndex, columnIndex) {
      // this._board.print();

      this._board.flipTile(rowIndex, columnIndex);

      if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
        console.log('You hit a bomb. GAME OVER!');
        this._board.print();
      } else if (this._board.hasSafeTiles === false) {
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