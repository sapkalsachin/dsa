/**
 * LEETCODE
 * LEVEL - HARD
 * Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
 * Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
 * Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
 * 
 * Example-1
 * Input: root = [1,2,3,null,null,4,5]
 * Output: [1,2,3,null,null,4,5]
 * 
 * Example-2
 * Input: root = []
 * Output: []
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let result = [];

    const bfs = (root)=>{

        if(root === null) return;

        const tempQueue = new Queue();
        tempQueue.enqueue(root);
        while(!tempQueue.isEmpty()){
            const current = tempQueue.dequeue();

            if(!current){
                result.push('-')
                continue;
            }

            result.push(current.val);
            tempQueue.enqueue(current.left)
            tempQueue.enqueue(current.right)
        }
    }

 bfs(root)
const returnVal = result.toString();
console.log('return value:', returnVal);
    return returnVal;
};


const insert = (_root, newNode)=>{

        const tempQueue = new Queue();
        tempQueue.enqueue(_root);

        while(!tempQueue.isEmpty()){
            const current = tempQueue.dequeue();

            if(current === null){
                continue
            }

            if(!current.left){
                current.left = newNode;
                break;
            }else{
                if(current.left.val !== Infinity){
                    tempQueue.enqueue(current.left)
                }
            }

            if(!current.right){
                current.right = newNode;
                break;
            }else{
                if(current.right.val !== Infinity){
                    tempQueue.enqueue(current.right)
                }
            }
        }

}

const cleanTree = (root) => {
    if(root === null) return;

    const tempQueue = new Queue();
    tempQueue.enqueue(root);

    while(!tempQueue.isEmpty()){
        const current = tempQueue.dequeue();

        if(current.left && current.left.val === Infinity){
            current.left = null
        }

        if(current.left){
            tempQueue.enqueue(current.left)
        }

        if(current.right && current.right.val === Infinity){
            current.right = null
        }
        if(current.right){
            tempQueue.enqueue(current.right)
        }

    }
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    console.log(`input val`, data);
    let root = null;
    const preOrder = data.split(',')

    console.log(`preOrder is here`, preOrder)
    // if(!preOrder.length){
    //     return null
    // }
    rootVal = parseInt(preOrder[0]);
    root = isNaN(rootVal) ? null : new TreeNode(parseInt(preOrder[0]));
      const tempQueue = new Queue();
    tempQueue.enqueue(root);


    

    // isNaN(parseInt(preOrder[i]))
    for(let i=1; i< preOrder.length; i++){
        const newVal = isNaN(parseInt(preOrder[i])) ? null : parseInt(preOrder[i]);
        const newNode = newVal !== null ? new TreeNode(newVal) : new TreeNode(Infinity);
        insert(root, newNode)
    }
cleanTree(root)
    // cleanTree(root);
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */