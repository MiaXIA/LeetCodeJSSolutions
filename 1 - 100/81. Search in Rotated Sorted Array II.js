// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).
// You are given a target value to search. If found in the array return true, otherwise return false.

// Example 1:
// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true

// Example 2:
// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false

// Follow up:
// This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
// Would this affect the run-time complexity? How and why?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = (nums, target) => {
    let r = -1;
    let i = 0;
    for (; i < nums.length - 1; i++) {
        if (nums[i + 1] < nums[i]) break;
    }
    
    const func = (arr, start, end) => {
        if (start >= end) return;
        const mid = parseInt((end - start) / 2 + start);
        if (arr[mid] === target) r = mid;
        else if (arr[mid] < target) func(arr, mid + 1, end);
        else func(arr, start, mid);
    }
    
    if (nums[0] <= target && target <= nums[i]) {
        func(nums, 0, i + 1);
    } else if (nums[i + 1] <= target && target <= nums[nums.length - 1]) {
        func(nums, i+1, nums.length);
    }
    return r !== -1;
};