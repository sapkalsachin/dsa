/**
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 * 
 * Input: p = [1,2,3], q = [1,2,3]
 * Output: true
 * 
 * Input: p = [1,2], q = [1,null,2]
 * Output: false
 * 
 * Input: p = [1,2,1], q = [1,1,2]
 * Output: false
 * 
 * time(n + 2^(h+1)) space(n + 2^(h+1))
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const preOrder = (root)=>{
    const result = [];

    const traverse = (root)=>{
       const val = root ? root.val : null
       result.push(val);
       if(root){
           traverse(root.left)
           traverse(root.right);
       }
    }

   traverse(root);
   return result;
}
/**
* @param {TreeNode} p
* @param {TreeNode} q
* @return {boolean}
*/
var isSameTree = function(p, q) {
   let result = false;
   const pPreOrder = preOrder(p);
   const qPreOrder = preOrder(q);

console.log("pPreOrder", pPreOrder)
console.log("qPreOrder", qPreOrder)
   if(pPreOrder.length !== qPreOrder.length){
       return result
   }

result = true;
   for(let i=0; i<pPreOrder.length; i++){
       if(pPreOrder[i] !== qPreOrder[i]){
           console.log('not equal');
           console.log(pPreOrder[i])
           console.log(qPreOrder[i])
           result = false
           break;
       }
   }
   return result;
};




/**
 * BEETER APPROACH BY NEETCODE
 * TIme O(N) | Space O(H)
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const isBaseCase = !(p || q);
    if (isBaseCase) return true;

    const isBalanced = (p && q);
    if (!isBalanced) return false;

    const isSame = p.val === q.val;
    if (!isSame) return false;

    return dfs(p, q);
};

const dfs = (p, q) => {
    const left = isSameTree(p.left, q.left);
    const right = isSameTree(p.right, q.right);

    return left && right;
}