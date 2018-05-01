//this is a minesweeper game

//create the players board based on # of rows and columns
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = []; //create board to be used based on user input
  for (var r = 0; r < numberOfRows; r++) {
    let row = []; //creat rows based on number specified by user
    for (var c = 0; c < numberOfColumns; c++) {
      row.push('?'); //create and push columns to row based on number specified by user
    }
    board.push(row); //push rows with columns added to board
  }
  return board;
};

//create the bomb board based on # of rows, columns, and bombs
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
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
};

//find # of bombs around the given index on the given board
const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
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

  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;

  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];

    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < 0) {
      if (bombBoard[neighborRowIndex][neighborColumnIndex] == 'B') {
        numberOfBombs++
      }
    }
  });
  return numberOfBombs;
};

//allow player to flip a title to see if there is bomb under it
const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
  if (playerBoard[rowIndex][columnIndex] !== '?') {
    console.log('This tile has already been flipped!');
    return ;
  } else if (bombBoard[rowIndex][columnIndex] == 'B') {
    
  }
}

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player board:');
printBoard(playerBoard);
console.log('Bomb Board:');
printBoard(bombBoard);










//end js
