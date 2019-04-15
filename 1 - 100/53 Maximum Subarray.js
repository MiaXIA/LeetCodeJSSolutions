// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

//Example:
//Input: [-2,1,-3,4,-1,2,1,-5,4]
//Output: 6
//Explanation: [4,-1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = nums => {
    var prev = 0;
    var max = -Number.MAX_VALUE;
    
    for (var i = 0; i < nums.length; i++) {
        prev = Math.max(prev + nums[i], nums[i]);
        max = Math.max(max, prev);
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));