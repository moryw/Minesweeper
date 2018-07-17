//this is a minesweeper game

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


const game1 = new Game(9,9,6);

game1.playMove(1,0);


// let playerBoard = generatePlayerBoard(3,4);
// let bombBoard = generateBombBoard(3,4,5);

// console.log('Bomb Board:');
// printBoard(bombBoard);
// console.log('Player board:');
// printBoard(playerBoard);
//
// flipTile(playerBoard, bombBoard, 0, 0);
// flipTile(playerBoard, bombBoard, 1, 0);
// console.log('Updated player board:');
// printBoard(playerBoard);










//end js
