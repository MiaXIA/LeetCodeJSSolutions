// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = (nums, k) => {
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (arr.includes(nums[i])) return true;
        arr.push(nums[i]);
        if (arr.length > k) arr.shift();
    }
    return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = (nums, k) => {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const v = nums[i];
        map[v] = map[v] || [];
        map[v].push(i);
    }
    
    for (let key in map) {
        for (let i = 0; i < map[key].length - 1; i++) {
            if (map[key][i + 1] - map[key][i] <= k) return true;
        }
    }
    return false;
};
