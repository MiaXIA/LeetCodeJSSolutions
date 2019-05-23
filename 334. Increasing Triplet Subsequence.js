// Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.
// Formally the function should:
// Return true if there exists i, j, k 
// such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
// Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

// Example 1:
// Input: [1,2,3,4,5]
// Output: true

// Example 2:
// Input: [5,4,3,2,1]
// Output: false

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = (nums) => {
    let headSmallPtr = Infinity;
    let midSmallPtr = Infinity;
    for (let num of nums) {
        if (num > midSmallPtr) return true;
        else if (num <= headSmallPtr) headSmallPtr = num;
        else if (num < midSmallPtr) midSmallPtr = num;
    }
    return false;
};