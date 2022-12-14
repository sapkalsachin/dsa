/**
 * LEETCODE
 * LEVEL - EASY
 * 
 * Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
 * A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
 *
 * https://leetcode.com/problems/subtree-of-another-tree/
 * 
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const isSameTree = (root, subRoot)=>{
    
    //if either node is null or both are null
    if(!(root && subRoot)){
        return root === subRoot; //if both are null which means last nodes are same
    }

    //means both are not null and can access val
    //if current root value is not same, then trees are not same
    if(root.val !== subRoot.val){
        return false;
    }


    //now if current nodes are same, check for child nodes as well
    const leftChildSame = isSameTree(root.left, subRoot.left);
    const rightChildSame = isSameTree(root.right, subRoot.right);

    //both child should be same to get same subtree
    return leftChildSame && rightChildSame;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
     //if root is null, then it can't have a subtree
     if(!root) return false;

    // check if both trees are same
     if(isSameTree(root, subRoot)){
         return true
     }

     //else check for left and right subtrees
     const isLeftSubtreeSame = isSubtree(root.left, subRoot);
     const isRightSubtreeSame = isSubtree(root.right, subRoot);

     //either of those are same, we have a subtree
     return isLeftSubtreeSame || isRightSubtreeSame;
};