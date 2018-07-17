//game logic for minesweeper
import Board from './board';
export {Game as default};

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
    } else if (this._board.hasSafeTiles === false) {
      console.log('WINNER! There are no more safe tiles.');
    } else {
      console.log('Current Board');
      this._board.print();
    }
  }
};
