/**
 * 
 * https://leetcode.com/problems/sudoku-solver/description/
 * LEETCODE
 * LEVEL - Hard
 * 
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * 
 * A sudoku solution must satisfy all of the following rules:
 * 
 * Each of the digits 1-9 must occur exactly once in each row.
 * Each of the digits 1-9 must occur exactly once in each column.
 * Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
 * 
 * The '.' character indicates empty cells.
 * 
 * 
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    solve(board);
  return board;
};

const solve = (board)=>{
  let emptyCellExists = false;
  let row = -1;
  let col = -1;
  //get the next empty cell
  for(let i=0; i<board.length; i++){
      for(let j=0; j<board.length; j++){
          const num = parseInt(board[i][j]);
          if(isNaN(num)){
              row = i;
              col = j;
              emptyCellExists = true;
              break;
          }
      }

      //break the outer loop as well
      if(emptyCellExists === true) break;
  }

  //if no more empty cell exists, the sudoku is solved
  if(!emptyCellExists){
      return true;
  }

  //try putting all the numbers in the empty cell;
  for(let num=1; num<=9; num++){
      if(isSafe(board, row, col, num)){
          
          board[row][col] = `${num}`;
          
          //solve further cells
          const isSolved = solve(board)

          if(isSolved){
              return true;
          }
          
          //backtrack
          board[row][col] = `.`;
      }
  }

  return false;
}

const isSafe = (board, row, col, num) => {

  //check rows
  for(let i=0; i<board.length; i++){
      if(board[row][i] === `${num}`){
          return false
      }
  }

  //check cols
  for(let i=0; i< board.length; i++){
      if(board[i][col] === `${num}`){
          return false;
      }
  }

  //check for same number in current block
  const multiple = 3;
  const rStart = row - (row % multiple);
  const cStart = col - (col % multiple);

  for(let i = rStart; i < rStart + multiple; i++){
      for(let j = cStart; j < cStart + multiple; j++){
          if(board[i][j] === `${num}`){
              return false;
          }
      }
  }

  return true;
}