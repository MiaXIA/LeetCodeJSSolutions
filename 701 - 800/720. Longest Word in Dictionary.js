// Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order.
// If there is no answer, return the empty string.

// Example 1:
// Input: 
// words = ["w","wo","wor","worl", "world"]
// Output: "world"
// Explanation: 
// The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".

// Example 2:
// Input: 
// words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
// Output: "apple"
// Explanation: 
// Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".

// Note:
// All the strings in the input will only contain lowercase letters.
// The length of words will be in the range [1, 1000].
// The length of words[i] will be in the range [1, 30].

/**
 * @param {string[]} words
 * @return {string}
 */
const findLongestWord = trie => {
    let result;
    let queue = bfs(trie.root);
    while (queue.length > 0) {
      const node = queue.shift();
      const next = bfs(node);
      result = node["$"];
      queue = [...queue, ...next];
    }
    return result;
  };
  
  const bfs = node => {
    return Object.keys(node)
      .filter(c => node[c]["$"])
      .map(c => node[c])
      .sort((a, b) => b["$"].localeCompare(a["$"]));
  };
  
  class Trie {
    constructor() {
      this.root = {};
    }
  
    insert(word) {
      let root = this.root;
      for (let i = 0; i < word.length; i++) {
        if (!root[word[i]]) {
          root[word[i]] = {};
        }
        root = root[word[i]];
      }
      root["$"] = word;
    }
  }
  
  var longestWord = (words) => {
    const trie = new Trie();
    for (let i = 0; i < words.sort().length; i++) {
      trie.insert(words[i]);
    }
    const word = findLongestWord(trie);
    return word;
  };