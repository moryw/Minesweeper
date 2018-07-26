//game logic for minesweeper

// To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);
// game.playMove(1, 2);
// When done run `.exit`

// Matts new way to play
// Run `.load game.js` to load the contents of this file.
// To start a new game type: start(n,n,n)
// To flip a tile type: flip(n,n)
// When done run `.exit`

import {Board} from './board.js';

class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, columnIndex) {
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
};

//let game = new Game(3,3,8);
let game;
let start = (rows, colums, bombs) => {
  game = new Game(rows, colums, bombs);
  game._board.print();
};

let flip = (rowIndex, columnIndex) => {
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
