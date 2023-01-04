/**
 * https://leetcode.com/problems/n-queens/description/
 * LEETCODE
 * LEVEL - Hard
 * 
 * 
 * 
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
 * Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
 * Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.
 * 
 * Example 1
 * Input: n = 4
 * Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 * Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
 * 
 * Example 2
 * Input: n = 1
 * Output: [["Q"]]
 */

const getArr = (n) => {
    const arr  = new Array(n);
    for(let i = 0; i < arr.length; i++){
        arr[i] = new Array(3);
        for(let j=0; j < arr.length; j++){
            arr[i][j] = false;
            
        }
    }
    return arr;
}

const isSafe = (board, row, col) => {

    //since we are putting a queen at one row at a time, the previously added queens
    // can be only in vertical-up, diagonally-left and diagonally-right direction, 
    // down, down-left, down-right from current cell, won't have any queen.

    //vertical
    for(let i = 1; i <= row; i++){
        if(board[row - i][col]){
            return false;
        }
    }

    //diagonally-left-up
    const minRange = Math.min(row, col);
    for(let i = 1; i <= minRange; i++){
        if(board[row-i][col-i]){
            return false;
        }
    }

    //diagonally-right-up
    const minRange2 = Math.min(row, (board.length - 1) - col);
    
    for(let j = 1; j <= minRange2; j++){
        if(board[row - j][col + j]){
            return false;
        }
    }

    return true
}

const getOutput = (board, output = [])=>{
    for(let i = 0; i < board.length; i++){
        let arr = '';
        board[i].forEach(d =>  arr += d === true ? 'Q' : '.')
        output.push(arr)
    }
}

const nQueens = (board, row = 0, result) => {

    if(row === board.length){
        let output = [];
        getOutput(board, output)

        result.push(output)
        
        return;
    }
    let count = 0;

    for(let col = 0; col < board.length; col++){

        if(isSafe(board, row, col)){
            board[row][col] = true;

            count += nQueens(board, row + 1, result)

            board[row][col] = false;
        }
    }
}

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let arr2 = getArr(n);
let result = [];
nQueens(arr2, 0, result);
return result;
};