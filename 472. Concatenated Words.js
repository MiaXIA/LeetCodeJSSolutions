// Given a list of words (without duplicates), please write a program that returns all concatenated words in the given list of words.
// A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

// Example:
// Input: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
// Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
// Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
//  "dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
// "ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
// Note:
// The number of elements of the given array will not exceed 10,000
// The length sum of elements in the given array will not exceed 600,000.
// All the input string will only include lower case letters.
// The returned elements order does not matter.

/**
 * @param {string[]} words
 * @return {string[]}
 */
class Trie {
    constructor() {
        this.root = {};
    }
    
    insert(word) {
        let root = this.root;
        for (let i = 0;i < word.length; i++) {
            if (!root[word[i]]) root[word[i]] = {};
            root = root[word[i]];
        }
        root['$'] = true;
    }
}

const testWord = (word, index, root, count) => {
    let cur = root;
    let n = word.length;
    for (let i = index; i < n; i++) {
        if (!cur[word[i]]) return false;
        if (cur[word[i]]['$']) {
            if (i === n - 1) return count >= 1;
            if (testWord(word, i + 1, root, count + 1)) return true;
        }
        cur = cur[word[i]];
    }
    return false;
}

var findAllConcatenatedWordsInADict = (words) => {
    let trie = new Trie();
    for (let i = 0; i < words.length; i++) trie.insert(words[i]);
    const res = [];
    for (let i = 0; i < words.length; i++) {
        if (testWord(words[i], 0, trie.root, 0)) res.push(words[i]);
    }
    return res;
};