// Design a data structure that supports all following operations in average O(1) time.
// Note: Duplicate elements are allowed.
// insert(val): Inserts an item val to the collection.
// remove(val): Removes an item val from the collection if present.
// getRandom: Returns a random element from current collection of elements. The probability of each element being returned is linearly related to the number of same value the collection contains.

// Example:
// // Init an empty collection.
// RandomizedCollection collection = new RandomizedCollection();
// // Inserts 1 to the collection. Returns true as the collection did not contain 1.
// collection.insert(1);
// // Inserts another 1 to the collection. Returns false as the collection contained 1. Collection now contains [1,1].
// collection.insert(1);
// // Inserts 2 to the collection, returns true. Collection now contains [1,1,2].
// collection.insert(2);
// // getRandom should return 1 with the probability 2/3, and returns 2 with the probability 1/3.
// collection.getRandom();
// // Removes 1 from the collection, returns true. Collection now contains [1,2].
// collection.remove(1);
// // getRandom should return 1 and 2 both equally likely.
// collection.getRandom();

/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
    this.map = {};
    this.array = [];
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    let res = true;
    if (this.map[val] !== undefined) res = false;
    this.map[val] = this.map[val] || [];
    this.map[val].push(this.array.length);
    this.array.push([val, this.map[val].length - 1]);
    
    return res;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    if (this.map[val] === undefined) return false;
    
    let valIndex = this.map[val].pop();
    if (this.map[val].length === 0) delete(this.map[val]);
    let lastIndex = this.array.length - 1;
    if (valIndex === lastIndex) {
        this.array.pop();
        return true;
    }
    
    [this.array[valIndex], this.array[lastIndex]] = [this.array[lastIndex], this.array[valIndex]];
    this.array.pop();
    
    let key = this.array[valIndex][0];
    let index = this.array[valIndex][1];
    this.map[key][index] = valIndex;
    
    return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    return this.array[Math.floor(Math.random() * this.array.length)][0];
};

/** 
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */