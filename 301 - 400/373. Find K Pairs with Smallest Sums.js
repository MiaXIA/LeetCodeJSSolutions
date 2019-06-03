// You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.
// Define a pair (u,v) which consists of one element from the first array and one element from the second array.
// Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.

// Example 1:
// Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
// Output: [[1,2],[1,4],[1,6]] 
// Explanation: The first 3 pairs are returned from the sequence: 
//              [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

// Example 2:
// Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
// Output: [1,1],[1,1]
// Explanation: The first 2 pairs are returned from the sequence: 
//              [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

// Example 3:
// Input: nums1 = [1,2], nums2 = [3], k = 3
// Output: [1,3],[2,3]
// Explanation: All possible pairs are returned from the sequence: [1,3],[2,3]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = (nums1, nums2, k) =>{
    if(nums1.length == 0 || nums2.length == 0) return [];

    let q = new PriorityQ();
    for (let i = 0; i < Math.min(nums1.length, k); i++){
        let n1 = nums1[i];
        for (let j = 0; j < Math.min(nums2.length, k); j++){
            let n2 = nums2[j];
            let diff = n1 + n2;
            let obj = {
                'diff' : diff,
                'pair' : [n1, n2]
            };
            if (q.size() < k) q.insert(obj);
            else{
                if (diff < q.arr[0].pair[0] + q.arr[0].pair[1]){
                    q.removeMax();
                    q.insert(obj);
                }
            }
        }
    }
    
    let res = [];
    while (k > 0 && q.size() > 0){
        res.push(q.removeMax().pair);
        k--;
    }
    
    return res;
};


const PriorityQ = function() {
    this.arr = [];
    
    this.size = function(){
        return this.arr.length;
    }
    this.insert = function(x){
        this.arr.push(x);
        if (this.arr.length > 1){
            this.siftUp(this.arr.length - 1);
        }
    };
    this.siftUp = function(i){
        let parent = Math.floor((i - 1) / 2);
        if (parent >= 0 && this.arr[parent].diff < this.arr[i].diff){
            this.swap(parent, i);
            this.siftUp(parent);
        }
    }
    this.siftDown = function(i){
        let left = i * 2 + 1;
        let right = i * 2 + 2;
        let toSwap = null;
        
        if (left < this.arr.length && this.arr[left].diff > this.arr[i].diff){
            toSwap = left;
            if (right < this.arr.length && this.arr[right].diff > this.arr[left].diff){
                toSwap = right;
            }
        }else if (right < this.arr.length && this.arr[right].diff > this.arr[i].diff){
            toSwap = right;
        }
        if (toSwap != null){
            this.swap(toSwap, i);
            this.siftDown(toSwap);
        }
    }
    
    this.swap = function(i, j){
        let temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    }
    
    this.removeMax = function(){
        let min = this.arr.shift();
        
        if (this.arr.length > 1){
            let end = this.arr.pop();
            this.arr.unshift(end);
            this.siftDown(0);
        }
        
        return min;
    }
}