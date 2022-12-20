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