// Design a HashMap without using any built-in hash table libraries.
// To be specific, your design should include these functions:
// put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
// get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
// remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.

// Example:
// MyHashMap hashMap = new MyHashMap();
// hashMap.put(1, 1);          
// hashMap.put(2, 2);         
// hashMap.get(1);            // returns 1
// hashMap.get(3);            // returns -1 (not found)
// hashMap.put(2, 1);          // update the existing value
// hashMap.get(2);            // returns 1 
// hashMap.remove(2);          // remove the mapping for 2
// hashMap.get(2);            // returns -1 (not found) 

// Note:
// All keys and values will be in the range of [0, 1000000].
// The number of operations will be in the range of [1, 10000].
// Please do not use the built-in HashMap library.

/**
 * Initialize your data structure here.
 */
var MyHashMap = function(maxLength = 1e5, buckets = []) {
    this.maxLength = maxLength;
    this.buckets = buckets;
  };
  
  MyHashMap.prototype.getIndex = function(key) {
    return key % this.maxLength;
  };
  
  MyHashMap.prototype.getPos = function(key, index) {
    if (this.buckets[index] === undefined) return -1;
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) return i ;
    }
    return -1;
  };
  
  /**
   * value will always be non-negative. 
   * @param {number} key 
   * @param {number} value
   * @return {void}
   */
  MyHashMap.prototype.put = function(key, value) {
    index = this.getIndex(key);
    pos = this.getPos(key, index);
    if (pos < 0) {
      if (this.buckets[index] === undefined || this.buckets[index].length === 0) {
        this.buckets[index] = [];
        this.buckets[index].push([key, value]);
      }
    } else {
      this.buckets[index][pos] = [key, value];
    }
  };
  
  /**
   * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
   * @param {number} key
   * @return {number}
   */
  MyHashMap.prototype.get = function(key) {
    index = this.getIndex(key);
    pos = this.getPos(key, index);
    if (pos > -1) {
      return this.buckets[index][pos][1];
    }
    return -1;
  };
  
  /**
   * Removes the mapping of the specified value key if this map contains a mapping for the key 
   * @param {number} key
   * @return {void}
   */
  MyHashMap.prototype.remove = function(key) {
    index = this.getIndex(key);
    pos = this.getPos(key, index);
    if (pos > -1) {
      this.buckets[index].splice(pos, 1);
    }
  };
  
  /** 
   * Your MyHashMap object will be instantiated and called as such:
   * var obj = new MyHashMap()
   * obj.put(key,value)
   * var param_2 = obj.get(key)
   * obj.remove(key)
   */