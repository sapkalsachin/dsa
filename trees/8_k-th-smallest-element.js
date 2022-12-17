/**
 * LEETCODE
 * LEVEL-MEDIUM
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * 
 * Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
 *
 * Example1
 * Input: root = [3,1,4,null,2], k = 1
 * Output: 1
 * 
 * Example2
 * Input: root = [5,3,6,2,4,null,null,1], k = 3
 * Output: 3
 *  
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if(root === null) return null;

    const result = [];

    const dfs = (current)=>{
        if(current.left){
            const result = dfs(current.left)
            if(result != null){
                return result
            }
        }
        result.push(current.val);
        if(result.length >= k) return result[k-1];
        if(current.right){
            const result = dfs(current.right)
            if(result != null){
                return result
            }
        }
        return null;
    }

    return dfs(root)
};