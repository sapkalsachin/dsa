/**
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