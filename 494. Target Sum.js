// You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.
// Find out how many ways to assign symbols to make sum of integers equal to target S.

// Example 1:
// Input: nums is [1, 1, 1, 1, 1], S is 3. 
// Output: 5
// Explanation: 
// -1+1+1+1+1 = 3
// +1-1+1+1+1 = 3
// +1+1-1+1+1 = 3
// +1+1+1-1+1 = 3
// +1+1+1+1-1 = 3
// There are 5 ways to assign symbols to make the sum of nums be target 3.
// Note:
// The length of the given array is positive and will not exceed 20.
// The sum of elements in the given array will not exceed 1000.
// Your output answer is guaranteed to be fitted in a 32-bit integer.

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = (nums, S) => {
    if (nums === undefined || nums.length === 0) return 1;
    if (S === null) return null;
    
    const helper = (nums, i, sum, cache) => {
        let key = `${i},${sum}`;
        if (cache.has(key)) return cache.get(key);
        if (i === nums.length) return sum === S ? 1 : 0;
        
        let ways = helper(nums, i + 1, sum + nums[i], cache) + helper(nums, i+ 1, sum - nums[i], cache);
        cache.set((`${i},${sum}`), ways);
        return ways;
    }
    return helper(nums, 0, 0, new Map());
};