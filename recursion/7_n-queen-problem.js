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

const printBoard = (board)=>{
    for(let i = 0; i < board.length; i++){
        arr = board[i].map(d => d === true ? 'Q' : 'X')
        
            console.log(arr.toString())
    }
    console.log("\n\n")
}

const nQueens = (board, row) => {

    if(row === board.length){
        printBoard(board)
        return 1;
    }
    let count = 0;

    for(let col = 0; col < board.length; col++){

        if(isSafe(board, row, col)){
            board[row][col] = true;

            count += nQueens(board, row + 1)

            board[row][col] = false;
        }
    }

    return count;
}


let arr1 = getArr(3);
console.log(nQueens(arr1, 0))

let arr2 = getArr(4);
console.log(nQueens(arr2, 0))

let arr3 = getArr(5);
console.log(nQueens(arr3, 0))


