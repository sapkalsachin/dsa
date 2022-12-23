/**
 * Design a data structure that supports adding new words and finding if a string matches any previously added string.
 * Implement the WordDictionary class:
 * 
 * WordDictionary() Initializes the object.
 * void addWord(word) Adds word to the data structure, it can be matched later.
 * bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 * 
 * 
 * Example:
 * Input
 * ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
 * [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
 * Output
 * [null,null,null,null,false,true,true,true]
 * 
 * Explanation
 * WordDictionary wordDictionary = new WordDictionary();
 * wordDictionary.addWord("bad");
 * wordDictionary.addWord("dad");
 * wordDictionary.addWord("mad");
 * wordDictionary.search("pad"); // return False
 * wordDictionary.search("bad"); // return True
 * wordDictionary.search(".ad"); // return True
 * wordDictionary.search("b.."); // return True
 */


const TrieNode = function(char){
    this.char = char;
    this.children = new Array(26).fill(null);
    this.isEnd = false;
}

var WordDictionary = function() {
    this.root = new TrieNode('-')
    this.getIndex = (ch)=>{
        return ch.charCodeAt() - 'a'.charCodeAt();
    }
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    if(word === null || word === '') return;

    let currentNode = this.root;
    word = word.toLowerCase();

    for(let i = 0; i < word.length; i++){
        const ind = this.getIndex(word[i]);
        if(! currentNode.children[ind]){
            currentNode.children[ind] = new TrieNode(word[i])
        }
        currentNode = currentNode.children[ind]
    }

    currentNode.isEnd = true;

};


WordDictionary.prototype.search = function(word) {

    const iteratorHelper = (currentNode, key, level)=>{

        //iterate for each child, if child has not null value, pass it as root to dfs
        for(let i = 0; i<currentNode.children.length; i++){
            const childNode = currentNode.children[i];
            if(childNode){
                const result = dfs(childNode, key, level + 1);
                if(result) return result;
            }
        }
        return false;
    }
    
   const dfs = (currentNode, key, level)=>{

       if(!currentNode) return false;

       if(level === key.length){
           return currentNode.isEnd
       }
   
        //if current char is wildCard, iterate through all the children and search for remaining chars
       if(key[level] === "."){
           return iteratorHelper(currentNode, key, level)
       }
           
       //else check for next char
       else{
           const childNode = currentNode.children[this.getIndex(key[level])]
           return dfs(childNode, key, level + 1);
       }
   }

    return dfs(this.root, word, 0)
};
