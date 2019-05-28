// Given a list of unique words, find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

// Example 1:
// Input: ["abcd","dcba","lls","s","sssll"]
// Output: [[0,1],[1,0],[3,2],[2,4]] 
// Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]

// Example 2:
// Input: ["bat","tab","cat"]
// Output: [[0,1],[1,0]] 
// Explanation: The palindromes are ["battab","tabbat"]

/**
 * @param {string[]} words
 * @return {number[][]}
 */
function TrieNode() {
    this.next = Array(26).fill(0);
    this.index = -1;
    this.list = [];
  }
  
  TrieNode.prototype.getChar = function(char) {
    return this.next[char.charCodeAt() - 97];
  }
  
  TrieNode.prototype.putChar = function(char) {
    this.next[char.charCodeAt() - 97] = new TrieNode();
  }
  
  TrieNode.prototype.addWord = function(word, index) {
    let node = this;
    for(let i = word.length - 1; i >= 0; i--) {
      if(!node.getChar(word[i])) node.putChar(word[i]);
      if(isPalindrome(word, 0, i)) node.list.push(index);
      node = node.getChar(word[i]);
    }
  
    node.list.push(index);
    node.index = index;
  }
  
  TrieNode.prototype.search = function(word, index, res) {
    let node = this;
  
    for(let i = 0; i < word.length; i++) {
      if(node.index >= 0 && node.index != index && isPalindrome(word, i, word.length - 1)) res.push([index, node.index]);
      node = node.getChar(word[i]);
      if(!node) return;
    }
  
    for(let i = 0; i < node.list.length; i++) {
      if(index == node.list[i]) continue;
      res.push([index, node.list[i]]);
    }
  }
  
  const isPalindrome = (str, i, j) => {
    while(i < j) if(str[i++] != str[j--]) return false;
    return true;
  }
  
  var palindromePairs = (words) => {
    let res = [];
    const root = new TrieNode();
  
    for(let i = 0; i < words.length; i++) root.addWord(words[i], i);
  
    for(let i = 0; i < words.length; i++) root.search(words[i], i, res);
  
    return res;
  };