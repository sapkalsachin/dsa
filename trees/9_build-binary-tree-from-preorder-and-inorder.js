/**
 * LEETCODE
 * LEVEL-MEDIUM
 * 
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * 
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
 * 
 * Example1
 * Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * Output: [3,9,20,null,null,15,7]
 * 
 * Example2
 * Input: preorder = [-1], inorder = [-1]
 * Output: [-1]
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    
    if(preorder.length === 0 || inorder.length === 0){
        return null;
    }

    //first element is always a root element
    const currentVal = preorder[0];
    const root = new TreeNode(currentVal);

    //in InOrder list, mid tells the left and right subtree
    const mid = inorder.indexOf(currentVal);

    //get next root for left subtree
    root.left = buildTree(preorder.slice(1, 1+mid), inorder.slice(0, mid));
    
    //get next root for right subtree
    root.right = buildTree(preorder.slice(1+mid), inorder.slice(mid+1))
    
    //return current root
    return root;
};
