/**
 * https://leetcode.com/problems/unique-paths/description/
 * 
 * LEETCODE
 * LEVEL - MEDIUM
 * 
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {

    const memo = new Map();
    const getKey = (a, b) =>`${a}#${b}`
    const findPaths = function(row, col) {

   if(row === 1 || col === 1 ){
            return 1;
        }

        let right = 0;
        let down = 0;
        const rightKey = getKey(row, col-1);
        const downKey = getKey(row-1, col);
        
        if(memo.has(rightKey)){
            right = memo.get(rightKey)
        }else{
            right = findPaths(row, col - 1 );
            memo.set(rightKey, right)
        }

        if(memo.has(downKey)){
            down = memo.get(downKey)
        }else{
            down = findPaths(row - 1, col);
            memo.set(downKey, down)
        }

        

        return right + down;
    };

    return findPaths(m, n)
   
};