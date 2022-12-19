/**
 * https://leetcode.com/problems/binary-tree-maximum-path-sum
 * 
 * LEETCODE
 * LEVEL - hard
 * 
 * Example1
 * Input: root = [1,2,3]
 * Output: 6
 * Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
 * 
 * Example2
 * Input: root = [-10,9,20,null,null,15,7]
 * Output: 42
 * Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
 * 
 * 
 * Time: O(N), space: O(H)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    if(root === null) return null;
    let maxPath = -Infinity
    const dfs = (current)=>{
        if(current === null) return 0;
        let currentPathSum = 0;
            const leftSum = dfs(current.left)
            const currentVal = current.val;
            const rightSum = dfs(current.right);
            currentPathSum = leftSum + currentVal + rightSum;
            maxPath = Math.max(maxPath, currentPathSum);

            //If the current node has children with negative sum path, then the current node itself will be the end of path
                let returnVal = currentVal;
                returnVal = Math.max(returnVal, currentVal + leftSum)
                returnVal = Math.max(returnVal, currentVal + rightSum)
                maxPath = Math.max(maxPath, returnVal)
            return returnVal
    }

    dfs(root);
    return maxPath;
};