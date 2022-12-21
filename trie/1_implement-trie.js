/**
 * LEETCODE
 * LEVEL - MEDIUM
 * https://leetcode.com/problems/implement-trie-prefix-tree/description/
 * 
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.
 * Implement the Trie class:
 *      Trie() Initializes the trie object.
 *      void insert(String word) Inserts the string word into the trie.
 *      boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
 *      boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 * 
 * Example 1:
 * Input
 * ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
 * [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
 * Output
 * [null, null, true, false, true, null, true]
 * 
 * Explanation
 * Trie trie = new Trie();
 * trie.insert("apple");
 * trie.search("apple");   // return True
 * trie.search("app");     // return False
 * trie.startsWith("app"); // return True
 * trie.insert("app");
 * trie.search("app");     // return True
 */

const TrieNode = function (char) {
    this.char = char;
    this.children = new Array(26).fill(null);
    this.isEnd = false;
}

var Trie = function() {
    this.root = new TrieNode('-');
    this.getIndex = (char)=>{
       return char.charCodeAt() - 'a'.charCodeAt();
    }
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if(word === null || word === '') return;

    word = word.toLowerCase();

    let currentNode = this.root;
    for(let i=0; i<word.length; i++){
        const index = this.getIndex(word[i]);
        if(!currentNode.children[index]){
            currentNode.children[index] = new TrieNode(word[i])
        }
        currentNode = currentNode.children[index];
    }
    currentNode.isEnd = true;
};


/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let result = false;
    word = word.toLowerCase();
     
    let currentNode = this.root;
    for(let i=0; i<word.length; i++){
        const index = this.getIndex(word[i]);
        if(!currentNode.children[index]){
            return result;
        }
        currentNode = currentNode.children[index];
    }
    if(currentNode.isEnd === true){
        result = true;
    }
    return result
    
};


/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let result = false;
    prefix = prefix.toLowerCase();
     
    let currentNode = this.root;
    for(let i=0; i<prefix.length; i++){
        const index = this.getIndex(prefix[i]);
        if(!currentNode.children[index]){
            return false;
        }
        currentNode = currentNode.children[index];
    }
    
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */