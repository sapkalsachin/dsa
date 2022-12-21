class TrieNode{
    constructor(char){
        this.char = char;
        this.children = new Array(26).fill(null);
        this.isEnd = false;
    }

    setLeaf(){
        this.isEnd = true;
    }

    unsetLef(){
        this.isEnd = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode('')
    }

    getIndex(input){
        return input.charCodeAt()-'a'.charCodeAt();
    }

    insert(newWord){

        if (newWord === null) {
            return;
        }

        newWord = newWord.toLowerCase();
        let currentNode = this.root;
        let index = 0;

        for (let i = 0; i < newWord.length; i++) {
            index = this.getIndex(newWord[i]);

            //if the char is not present add new one
            if (!currentNode.children[index]) {
                currentNode.children[index] = new TrieNode(newWord[i]);
                console.log(`${newWord[i]} - inserted`);
            }

            currentNode = currentNode.children[index];
        }

        //set last child as leafNode
        currentNode.setLeaf()
        console.log(`new word ${newWord} - inserted`)
    }

    delete(key){

        const isEmptyChildren = (children)=>{
            for(let i=0; i<children.length; i++){
                if(children[i] !== null){
                    return false;
                }
            }
            return true;
        }
        
        const deleteHelper = (currentNode, key, keyLen, index)=>{
            let deleteSelf = false;
            if(this.root === null || key === null){
                return;
            }

            //if currentNode has last char of key
            if(keyLen === index){
                currentNode.isEnd = false;

                //if currentNode doesn't have children, mark it for deletion
                if(isEmptyChildren(currentNode.children)){
                    deleteSelf = true;
                }
            }else{
                const currentKeyIndex = this.getIndex(key[index])
                const childNode = currentNode.children[currentKeyIndex];
                let deleteCurrent = deleteHelper(childNode, key, keyLen, index + 1);

                //set childNode to null if deleteSelf is true
                if(deleteCurrent){
                    currentNode.children[currentKeyIndex] = null;

                    //if current node doesn't have children, mark it for deletion
                    if(isEmptyChildren(currentNode.children)){
                        deleteSelf = true;
                    }
                }
            }

            return deleteSelf;
        }

        deleteHelper(this.root, key, key.length, 0)
        return null;
    }

    search(searchKey){

        if(searchKey === null) return false;
        searchKey = searchKey.toLowerCase();
        let currentNode = this.root;
        let index = 0;

        for(let i=0; i < searchKey.length; i++){
            const currentChar = searchKey[i];
            index = this.getIndex(currentChar);

            if(currentNode.children[index] === null){
                return false;
            }

            currentNode = currentNode.children[index];

        }

        //after whole traversal, the last char should be the leafNode
        if(currentNode != null && currentNode.isEnd){
            return true;
        }

        return false;
    }
}