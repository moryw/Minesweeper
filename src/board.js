//board logic for minesweeper games
export class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfColumns * numberOfRows;
    this._playerboard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  get playerBoard() {
    return this._playerboard;
  }

  get bombBoard() {
    return this._bombBoard;
  }

  get numberOfTiles() {
    return this._numberOfTiles;
  }

  //allow player to flip a title to see if there is bomb under it
  flipTile(rowIndex, columnIndex) {
    if (this.playerBoard[rowIndex][columnIndex] !== '?') {
      console.log('This tile has already been flipped!');
      return ;
    } else if (this.bombBoard[rowIndex][columnIndex] == 'B') {
      this.playerBoard[rowIndex][columnIndex] = 'B'
    } else {
      this.playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex)
    }
    this._numberOfTiles--;
  }

  //find # of bombs around the given index on the given board
  getNumberOfNeighborBombs(rowIndex, columnIndex) {
    const neighborOffsets = [
      [-1,-1],
      [-1,0],
      [-1,1],
      [0,-1],
      [0,1],
      [1,-1],
      [1,0],
      [1,1]
    ];

    const numberOfRows = this.bombBoard.length;
    const numberOfColumns = this.bombBoard[0].length;
    let numberOfBombs = 0;

    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];

      if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
        if (this.bombBoard[neighborRowIndex][neighborColumnIndex] == 'B') {
          numberOfBombs++
        }
      }
    });

    return numberOfBombs;
  }

  hasSafeTiles() {
    return numberOfTiles !== numberOfBombs;
  }

  //create the players board based on # of rows and columns
  static generatePlayerBoard(numberOfRows, numberOfColumns) {
    let board = []; //create board to be used based on user input
    for (var r = 0; r < numberOfRows; r++) {
      let row = []; //creat rows based on number specified by user
      for (var c = 0; c < numberOfColumns; c++) {
        row.push('?'); //create and push columns to row based on number specified by user
      }
      board.push(row); //push rows with columns added to board
    }
    return board;
  }

  //create the bomb board based on # of rows, columns, and bombs
  static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    let board = []; //create board to be used based on user input
    for (var r = 0; r < numberOfRows; r++) {
      let row = []; //creat rows based on number specified by user
      for (var c = 0; c < numberOfColumns; c++) {
        row.push('?'); //create and push columns to row based on number specified by user
      }
      board.push(row); //push rows with columns added to board
    }

    let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) { //while the # of bombs place is less than the numebr of bombs place a bomd
      let randomRowIndex = Math.floor(Math.random() * numberOfRows); //find a random number depending on how many rows user requested and assign to randomRowIndex
      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns); //find a random number depending on how many columns user requested and assign to randomColumnIndex
      if (board[randomRowIndex][randomColumnIndex] !== 'B') {
        board[randomRowIndex][randomColumnIndex] = 'B'; //place a bomb 'B' on the random row and column
        numberOfBombsPlaced++
      }
    }

    return board;
  }

  print() {
    console.log(this.playerBoard.map(row => row.join(' | ')).join('\n'));
  }

};
