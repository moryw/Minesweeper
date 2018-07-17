//game logic for minesweeper
import {Board} from './board.mjs';

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

let game = new Game(3,3,8);

//console.log(game);
console.log(`Has safe tiles: ${game._board.hasSafeTiles()}`);
console.log(`Number of tiles: ${game._board.numberOfTiles}`);
game.playMove(0,0);
console.log(`Number of tiles: ${game._board.numberOfTiles}`);
console.log(`Number of bombs: ${game._board.numberOfBombs}`);
console.log(`Has safe tiles: ${game._board.hasSafeTiles()}`);






//end
