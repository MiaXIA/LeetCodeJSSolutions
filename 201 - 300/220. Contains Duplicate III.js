// Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.

// Example 1:
// Input: nums = [1,2,3,1], k = 3, t = 0
// Output: true

// Example 2:
// Input: nums = [1,0,1,1], k = 1, t = 2
// Output: true

// Example 3:
// Input: nums = [1,5,9,1,5,9], k = 2, t = 3
// Output: false

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = (nums, k, t)  => {
    const sortedIndex = nums.map((num, i) => ({num, i})).sort((a, b) => a.num - b.num);
    let start = 0;
    let end = 1;
    
    while (end < sortedIndex.length) {
        if (start === end) {
            end++;
            continue;
        }
        const a = sortedIndex[start];
        const b = sortedIndex[end];
        
        if (b.num - a.num > t) {
            start++;
            continue;
        }
        
        if (Math.abs(b.i - a.i) > k) {
            end++;
            continue;
        }
        return true;
    }
    return false;
};