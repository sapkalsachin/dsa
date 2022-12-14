class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    // to insert a node
    insert(value){
        const newNode = new Node(value);
        
        if(this.root === null){
            this.root = newNode; 
            return;
        }

        let current = this.root;
        
        while(true){
            if(newNode.val <= current.val){
                if(current.left === null){
                    current.left = newNode;
                    return;
                }else{
                    current = current.left;
                }
            }else{
                if(current.right === null){
                    current.right = newNode;
                    return;
                }else{
                    current = current.right;
                }
            }
        }
        
    }

    //to find a node;
    search(searchVal){
        if(this.root === null) return null;

        let current = this.root;

        while(current){ //condition missing
            if(current.val === searchVal){
                //return current;
                break;
            }

            if(searchVal < current.val){
                current = current.left;
            }else{
                current = current.right;
                
            }
        }

        return current;
    }

    //to check if node exists
    contains(searchVal){
        if(this.root === null) return null;

        let current = this.root;
        let found = false;
        while(current){ 
            if(current.val === searchVal){
                //return current;
                found = true;
                break;
            }

            if(searchVal < current.val){
                current = current.left;
            }else{
                current = current.right;
                
            }
        }

        return found;
    }

    // level 0 -> level1 -> level2...
    BFS(){
        const result = [];
        let current = this.root;

        const queue = [];
        
        if(current === null) return result;

        //push root to the queue
        queue.push(this.root);
        
        while(queue.length > 0){
            const current = queue.shift();

            result.push(current.val);

            if(current.left){
                queue.push(current.left)
            }

            if(current.right){
                queue.push(current.right)
            }
        }

        return result;
    }

    //left, node, right
    DFSInOrder(){
        const result = []
        if(this.root === null) return result;

        const traverse = (root)=>{
            if(root.left){
                traverse(root.left);
            }

            result.push(root.val);

            if(root.right){
                traverse(root.right)
            }
            
        }

        traverse(this.root);
        
        return result;
    }

    //node, left, right
    DFSPreOrder(){
        const result = [];

        if(this.root === null) return result;

        const traverse = (root) => {
            result.push(root.val);

            if(root.left){
                traverse(root.left);
            }

            if(root.right){
                traverse(root.right);
            }
        }

        traverse(this.root);
        
        return result;
    }

    //left, right, node
    DFSPostOrder(){
        const result = [];

        if(this.root === null) return result;

        const traverse = (root) => {
            if(root.left){
                traverse(root.left);
            }

            if(root.right){
                traverse(root.right);
            }

            result.push(root.val);
        }
        
        traverse(this.root);
        
        return result;
    }
    
}

//test
const bst = new BST();
bst.insert(10);
bst.insert(15);
bst.insert(5);
bst.search(5) // should return node with val 5
bst.search(5555) // should return null;
bst.contains(5) // should return true
bst.contains(5555) // should return false;

bst.BFS() // [10, 5, 15]
bst.DFSInOrder() //[5, 10, 15]
bst.DFSPreOrder() //[10, 5, 15]
bst.DFSPostOrder() //[5, 15, 10]
