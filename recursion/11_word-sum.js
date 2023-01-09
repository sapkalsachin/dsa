/**
 * LEETCODE
 * LEVEL - MEDIUM
 * 
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
 * 
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * Output: true
 * 
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
 * Output: true
 * 
 * 
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    console.log("board", board);
    console.log("word", word);
    
        const visited = new Set();
        const rowLen = board.length;
        const colLen = board[0].length;
        
        const dfs = (row, col, i) => {
    
            // if whole word is traversed
            if(i === word.length){
                return true;
            }
            
            //if row or col are out of bound
            if( row < 0 || col < 0 || row >= rowLen || col >= colLen)
            return false;
            
            //if word doesn't match return false
            if(word[i] !== board[row][col]){
                return false;
            }
    
            
            
            //if word is already visited
            if(visited.has(`${row}#${col}`)){
                return false;
            }
    
            visited.add(`${row}#${col}`);
    
            //top
                const top = dfs(row - 1, col, i+1);
    
            //bottom
                const bottom = dfs(row + 1, col, i+1)
    
            //left
                const left = dfs(row, col - 1, i + 1);
    
            //right
                const right = dfs(row, col + 1, i + 1);
    
            visited.delete(`${row}#${col}`);
    
            return top || left || right || bottom;
    
        }
    
    
        for(let i=0; i< rowLen; i++){
            for(let j=0; j<colLen; j++){
                if(dfs(i, j, 0)){
                    return true;
                }
            }
        }
        return false;
    };