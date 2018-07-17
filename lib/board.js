'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//board logic for minesweeper games
var Board = exports.Board = function () {
  function Board(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Board);

    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfColumns * numberOfRows;
    this._playerboard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  _createClass(Board, [{
    key: 'flipTile',


    //allow player to flip a title to see if there is bomb under it
    value: function flipTile(rowIndex, columnIndex) {
      if (this.playerBoard[rowIndex][columnIndex] !== '?') {
        console.log('This tile has already been flipped!');
        return;
      } else if (this.bombBoard[rowIndex][columnIndex] == 'B') {
        this.playerBoard[rowIndex][columnIndex] = 'B';
      } else {
        this.playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
      }
      this._numberOfTiles--;
    }

    //find # of bombs around the given index on the given board

  }, {
    key: 'getNumberOfNeighborBombs',
    value: function getNumberOfNeighborBombs(rowIndex, columnIndex) {
      var _this = this;

      var neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

      var numberOfRows = this.bombBoard.length;
      var numberOfColumns = this.bombBoard[0].length;
      var numberOfBombs = 0;

      neighborOffsets.forEach(function (offset) {
        var neighborRowIndex = rowIndex + offset[0];
        var neighborColumnIndex = columnIndex + offset[1];

        if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
          if (_this.bombBoard[neighborRowIndex][neighborColumnIndex] == 'B') {
            numberOfBombs++;
          }
        }
      });

      return numberOfBombs;
    }
  }, {
    key: 'hasSafeTiles',
    value: function hasSafeTiles() {
      return numberOfTiles !== numberOfBombs;
    }

    //create the players board based on # of rows and columns

  }, {
    key: 'print',
    value: function print() {
      console.log(this.playerBoard.map(function (row) {
        return row.join(' | ');
      }).join('\n'));
    }
  }, {
    key: 'playerBoard',
    get: function get() {
      return this._playerboard;
    }
  }, {
    key: 'bombBoard',
    get: function get() {
      return this._bombBoard;
    }
  }, {
    key: 'numberOfTiles',
    get: function get() {
      return this._numberOfTiles;
    }
  }], [{
    key: 'generatePlayerBoard',
    value: function generatePlayerBoard(numberOfRows, numberOfColumns) {
      var board = []; //create board to be used based on user input
      for (var r = 0; r < numberOfRows; r++) {
        var row = []; //creat rows based on number specified by user
        for (var c = 0; c < numberOfColumns; c++) {
          row.push('?'); //create and push columns to row based on number specified by user
        }
        board.push(row); //push rows with columns added to board
      }
      return board;
    }

    //create the bomb board based on # of rows, columns, and bombs

  }, {
    key: 'generateBombBoard',
    value: function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
      var board = []; //create board to be used based on user input
      for (var r = 0; r < numberOfRows; r++) {
        var row = []; //creat rows based on number specified by user
        for (var c = 0; c < numberOfColumns; c++) {
          row.push('?'); //create and push columns to row based on number specified by user
        }
        board.push(row); //push rows with columns added to board
      }

      var numberOfBombsPlaced = 0;
      while (numberOfBombsPlaced < numberOfBombs) {
        //while the # of bombs place is less than the numebr of bombs place a bomd
        var randomRowIndex = Math.floor(Math.random() * numberOfRows); //find a random number depending on how many rows user requested and assign to randomRowIndex
        var randomColumnIndex = Math.floor(Math.random() * numberOfColumns); //find a random number depending on how many columns user requested and assign to randomColumnIndex
        if (board[randomRowIndex][randomColumnIndex] !== 'B') {
          board[randomRowIndex][randomColumnIndex] = 'B'; //place a bomb 'B' on the random row and column
          numberOfBombsPlaced++;
        }
      }

      return board;
    }
  }]);

  return Board;
}();

;