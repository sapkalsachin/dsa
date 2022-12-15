/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * 
 * LEETCODE
 * LEVEL: Medium
 * 
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 * 
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[9,20],[15,7]]
 * 
 * Input: root = []
 * Output: []
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * time: O(N), space: O(W) W = 2^depth
 */

const BFS = (root) => {

    let mainQueue = new Queue();
    let levelQueue = new Queue();
    mainQueue.enqueue(root);

   const result = [];
   // result.push([root.val]);

   let levelResult = [];
   // levelQueue = Queue.fromArray(mainQueue.toArray());
   while(!(mainQueue.isEmpty() && levelQueue.isEmpty())){

       const current = mainQueue.dequeue();
       levelResult.push(current.val);

       if(current.left){
           levelQueue.enqueue(current.left)
       }

       if(current.right){
           levelQueue.enqueue(current.right)
       }

       if(mainQueue.isEmpty()){
           result.push(levelResult);
           levelResult = [];

           mainQueue = Queue.fromArray(levelQueue.toArray());

           levelQueue.clear()
       }
   }
   return result;
}
/**
* @param {TreeNode} root
* @return {number[][]}
*/
var levelOrder = function(root) {
   if(!root) return [];
return BFS(root);
   
};


/**
 * BETTER SOLUTION BY NEETCODE
 * 
 */
/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Time O(N) | Space O(W)
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const isBaseCase = root === null;
    if (isBaseCase) return [];

    return bfs([ root ]);
};

const bfs = (queue, levels = []) => {
    while (queue.length) {
        const level = [];

        for (let i = (queue.length - 1); 0 <= i; i--) {
            const node = queue.shift();

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);

            level.push(node.val);
        }

        levels.push(level.slice());
    }

    return levels;
}

/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Time O(N) | Space O(H)
 * @param {TreeNode} root
 * @return {number[]}
 */
 var levelOrder = function(root, level = 0, levels = []) {
    const isBaseCase = root === null;
    if (isBaseCase) return levels;

    const isLastNode = level === levels.length;
    if (isLastNode) levels.push([]);

    levels[level].push(root.val);

    return dfs(root, level, levels);
}

const dfs = (root, level, levels) => {
    if (root.left) levelOrder(root.left, (level + 1), levels);
    if (root.right) levelOrder(root.right, (level + 1), levels);

    return levels;
}