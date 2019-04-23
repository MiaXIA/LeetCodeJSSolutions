// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.
// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:
// LRUCache cache = new LRUCache( 2 /* capacity */ );
// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

/**
 * @param {number} capacity
 */

/** 
 * @param {number} key
 * @return {number}
 */

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.map = new Map();
    }
  
    get(key) {
      let val = this.map.get(key);
      if (typeof val === 'undefined') { return -1 }
      this.map.delete(key);
      this.map.set(key, val);
      return val;
    }
  
    put(key, value) {
      if (this.map.has(key)) { this.map.delete(key) }
      this.map.set(key, value);
      let keys = this.map.keys();
      while (this.map.size > this.capacity) { this.map.delete(keys.next().value) }
    }
  }