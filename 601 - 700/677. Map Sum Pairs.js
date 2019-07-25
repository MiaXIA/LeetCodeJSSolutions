// Implement a MapSum class with insert, and sum methods.
// For the method insert, you'll be given a pair of (string, integer). The string represents the key and the integer represents the value. If the key already existed, then the original key-value pair will be overridden to the new one.
// For the method sum, you'll be given a string representing the prefix, and you need to return the sum of all the pairs' value whose key starts with the prefix.

// Example 1:
// Input: insert("apple", 3), Output: Null
// Input: sum("ap"), Output: 3
// Input: insert("app", 2), Output: Null
// Input: sum("ap"), Output: 5

/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.children = {};
    this.val = 0;
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    let chars = key.split("");
    let node = this.children;
    for (let i = 0; i < chars.length; i++) {
        if (node[chars[i]] === undefined) node[chars[i]] = new MapSum();
        node = node[chars[i]];
    }
    node.val = val;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let sum = 0;
    let chars = prefix.split("");
    let node = this.children;
    for (let i = 0; i < chars.length; i++) {
        if (node[chars[i]] === undefined) return 0;
        node = node[chars[i]];
    }
    sum += node.val;
    for (let key in node) {
        if (node[key].val !== undefined) sum += this.getValues(node[key]);
    }
    return sum;
};

MapSum.prototype.getValues = function(node) {
    if (node.val === undefined) return 0;
    let sum = node.val;
    for (let key in node) sum += this.getValues(node[key]);
    return sum;
}

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */