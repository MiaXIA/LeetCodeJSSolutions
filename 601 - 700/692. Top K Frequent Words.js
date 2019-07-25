// Given a non-empty list of words, return the k most frequent elements.
// Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

// Example 1:
// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
//     Note that "i" comes before "love" due to a lower alphabetical order.

// Example 2:
// Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
// Output: ["the", "is", "sunny", "day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
//     with the number of occurrence being 4, 3, 2 and 1 respectively.

// Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Input words contain only lowercase letters.
// Follow up:
// Try to solve it in O(n log k) time and O(n) extra space.

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
let heap = function(comparator,array){
    this.ar = [...array];   
    this.comparator = comparator;
    
    for (let i = parseInt((this.ar.length - 1) / 2);i >= 0; i--){
        this.heapify(i);
    }
};

heap.prototype.heapify = function(i){
    if (i >= this.ar.length) return;
    let temp = i;
    if ((2 * i) + 1 < this.ar.length && this.comparator(this.ar[(2 * i) + 1], this.ar[temp]) < 0) temp = (2 * i) + 1;
    if ((2 * i) + 2 < this.ar.length && this.comparator(this.ar[(2 * i) + 2], this.ar[temp]) < 0) temp = (2 * i) + 2;
    
    if (temp !== i){
        let copy = this.ar[temp];
        this.ar[temp] = this.ar[i];
        this.ar[i] = copy;
        
        this.heapify(temp);
    }
};

heap.prototype.insert = function(data){
    if (data == null) return false;
    this.ar.push(data);
        
    let i = this.ar.length - 1;
    let parent = parseInt((i - 1) / 2);
    while (parent >= 0 && this.comparator(this.ar[parent], this.ar[i]) < 0){
        this.heapify(parent);
        i = parent;
        parent = parseInt((parent - 1) / 2);        
    }
    return true;
};

heap.prototype.extractMin = function(){
    let copy = this.ar[0];
    this.ar[0] = this.ar[this.ar.length - 1];
    this.ar.pop();
    this.heapify(0);
    return copy;
};

var topKFrequent = (words, k) => {
    let map = new Map();
    words.map((item) => {
        let t = map.get(item) || 0;
        map.set(item, t + 1);
    });
    words = [...new Set(words)];
    let myHeap = new heap((a, b) => {
       if (map.get(a) == map.get(b)) return a.localeCompare(b);
        return map.get(b) - map.get(a);
    }, words);
    let res = new Array();
    while (k--) res.push(myHeap.extractMin());
    return res;
};