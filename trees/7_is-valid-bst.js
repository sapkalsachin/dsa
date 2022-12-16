/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 * LEETCODE
 * LEVEL - MEDIUM
 * 
 * 
 * 
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 * 
 * Example 1 
 * Input: root = [2,1,3]
 * Output: true
 * 
 * Example 2
 * Input: root = [5,1,4,null,null,3,6]
 * Output: false
 * Explanation: The root node's value is 5 but its right child's value is 4.
 */



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

//SOLUTION-1 time: O(N) space: O(H)
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let minVal = -Infinity;
    let isBST = true;
    const dfs = (current) => {
        if(current.left){
            dfs(current.left);
        }
        current.val;
        if(minVal < current.val){
            minVal = current.val
        }else{
            isBST = false
        }
        if(current.right){
            dfs(current.right)
        }
    }

    dfs(root);
    return isBST
};


//SOLUTION-2 time: O(N) space: O(H)
var isValidBST2 = (root)=>{
    if(root === null) return true;
    let isBST = true;

    const getMinMax = (current)=>{
        if(current === null) return {min: Infinity, max: -Infinity};

        const left = getMinMax(current.left);
        const right = getMinMax(current.right);

        if(current.val <= left.max || current.val >= right.min){
            isBST = false
        }

        const newMin = Math.min(current.val, left.min);
        const newMax = Math.max(current.val, right.max)

        return {min: newMin, max:newMax}
    }

    getMinMax(root);
    return isBST
}