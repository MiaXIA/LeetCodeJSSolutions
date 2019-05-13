// Implement a trie with insert, search, and startsWith methods.

// Example:
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");   
// trie.search("app");     // returns true

// Note:
// You may assume that all inputs are consist of lowercase letters a-z.
// All inputs are guaranteed to be non-empty strings.

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

class Trie extends Map {
    constructor() {
      super()
      this.end = false
    }
    
    // Inserts a word into the trie.
    insert(word) {
      let node = this
      
      for (const c of word) {
        if (!node.has(c)) node.set(c, new Trie())
        node = node.get(c)
      }
      
      node.setEnd()
    }
    
    // search a prefix or whole key in trie and
    // returns the node where search ends
    searchPrefix(prefix) {
      let node = this
      
      for (const c of prefix) {
        if (node.has(c)) node = node.get(c)
        else return null
      }
      
      return node
    }
    
    // Returns if the word is in the trie.
    search(word) {
      const node = this.searchPrefix(word)
      return !!node && node.isEnd()
    }
    
    // Returns if there is any word in the trie
    // that starts with the given prefix.
    startsWith(prefix) {
      return !!this.searchPrefix(prefix)
    }
    
    isEnd() {
      return this.end
    }
    
    setEnd() {
      this.end = true
    }
  }