/**
 * 
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
 * 
 * According to the definition of LCA on Wikipedia: 
 * “The lowest common ancestor is defined between two nodes [p] and [q] as the lowest node in [T] that has both [p] and [q] as descendants (where we allow a node to be a descendant of itself).”
 * 
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * 
 * 
 * 
 * Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
 * Output: 6
 * Explanation: The LCA of nodes 2 and 8 is 6.
 * 
 * Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
 * Output: 2
 * Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
 * 
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} smaller
 * @param {TreeNode} greater
 * @return {TreeNode}
 */
const getAncestor = (root, smaller, greater) => {
    if(!root) return root;

    if( smaller.val <= root.val && greater.val >= root.val){
        return root
    }

    if(smaller.val < root.val && greater.val < root.val){
        return getAncestor(root.left, smaller, greater);
    }

    else{
        return getAncestor(root.right, smaller, greater)
    }

}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    if(!root) {
        return root
        };

    const [smaller, greater] = (p.val <= q.val)? [p,q] : [q, p];
    return getAncestor(root, smaller, greater);

};