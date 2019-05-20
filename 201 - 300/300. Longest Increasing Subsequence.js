// Given an unsorted array of integers, find the length of longest increasing subsequence.

// Example:
// Input: [10,9,2,5,3,7,101,18]
// Output: 4 
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 

// Note:
// There may be more than one LIS combination, it is only necessary for you to return the length.
// Your algorithm should run in O(n2) complexity.
// Follow up: Could you improve it to O(n log n) time complexity?

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = (nums) => {
    if (!nums.length) return 0;
    let dp = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        let min = 0;
        let max = dp.length;
        while (max > min) {
            mid = ~~((min + max) / 2);
            dp[mid] < nums[i] ? min = mid + 1 : max = mid;
        }
        dp[max] = nums[i];
    }
    return dp.length;
};