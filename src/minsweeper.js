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
  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    //this can possibly put bombs on top of bombs, will change with control flow
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++
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
