// Design a data structure that supports the following two operations:
// void addWord(word)
// bool search(word)
// search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

// Example:
// addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true

// Note:
// You may assume that all words are consist of lowercase letters a-z.

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.hashTable = {};
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let map = this.hashTable;
    
    for (let i = 0; i < word.length; i++) {
        if (!map[word[i]]) map[word[i]] = {};
        map = map[word[i]];
    }
    map["$"] = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return searchHelper(word, 0, this.hashTable);
};

const searchHelper = (word, index, node) => {
    if (index === word.length) return Boolean(node["$"]);
    
    const char = word[index];
    if (node[char]) return searchHelper(word, index + 1, node[char]);
    else if (char === ".") {
        for (let letter in node) {
            if (searchHelper(word, index + 1, node[letter])) return true;
        }
    }
    return false;
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */