// Given a sorted array, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.

// Example 1:
// Input: [1,2,3,4,5], k=4, x=3
// Output: [1,2,3,4]

// Example 2:
// Input: [1,2,3,4,5], k=4, x=-1
// Output: [1,2,3,4]

// Note:
// The value k is positive and will always be smaller than the length of the sorted array.
// Length of the given array is positive and will not exceed 104
// Absolute value of elements in the array and x will not exceed 104

// UPDATE (2017/9/19):
// The arr parameter had been changed to an array of integers (instead of a list of integers). Please reload the code definition to get the latest changes.

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
let heap = function(comparator,array){
    this.ar = [...array];   
    this.comparator = comparator;
    
    for (let i = parseInt((this.ar.length - 1) / 2); i >= 0; i--) this.heapify(i);
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
}

var findClosestElements = (arr, k, x) => {
    let myheap = new heap((a,b)=>{
        let v1 = Math.abs(x - a);
        let v2 = Math.abs(x - b);
        if (v1 < v2) return -1
        if (v2 < v1) return 1;
        return a - b;
    }, arr);
    let res = new Array();
    while (k--) res.push(myheap.extractMin());        
        
    res.sort((a, b) => a - b);
    return res;
};