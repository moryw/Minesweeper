//this is a minesweeper game

//create the players board based on # of rows and columns
const generatePlayerBoard = ((numberOfRows, numberOfColumns) => {
  let board = []; //create board to be used based on user input
  for (var r = 0; r < numberOfRows; r++) {
    let row = []; //creat rows based on number specified by user
    for (var c = 0; c < numberOfColumns; c++) {
      row.push('?'); //create and push columns to row based on number specified by user
    }
    board.push(row) //push rows with columns added to board
  }
  return board;
});

const generateBombBoard = ((numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = []; //create board to be used based on user input
  for (var r = 0; r < numberOfRows; r++) {
    let row = []; //creat rows based on number specified by user
    for (var c = 0; c < numberOfColumns; c++) {
      row.push('?'); //create and push columns to row based on number specified by user
    }
    board.push(row) //push rows with columns added to board
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
});

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
