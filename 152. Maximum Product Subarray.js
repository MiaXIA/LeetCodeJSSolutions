// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Example 1:
// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:
// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = (nums) => {
    if (nums.length === 1) return nums[0];
    
    let max = nums[0], min = nums[0], res = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let prevMax = max;
        max = Math.max(nums[i], max * nums[i], min * nums[i]);
        min = Math.min(prevMax * nums[i], nums[i], min * nums[i]);
        res = Math.max(max, res);
    }
    return res;
};