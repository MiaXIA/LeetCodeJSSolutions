// Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

// Note:
// All numbers will be positive integers.
// The solution set must not contain duplicate combinations.

// Example 1:
// Input: k = 3, n = 7
// Output: [[1,2,4]]

// Example 2:
// Input: k = 3, n = 9
// Output: [[1,2,6], [1,3,5], [2,3,4]]

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = (k, n) => {
    const res = [];
    const nums = [];
    for (let i = 1; i < 10; i++) nums.push(i);
        
    const helper = (list, subset = [], index = 0) => {
        if (subset.length === k) {
            const sum = subset.reduce((acc, curr) => Number(acc) + Number(curr), 0);
            if (sum === n) res.push(subset);
            return;
        }
        if (index >= list.length) return;
        
        const current = list[index];
        helper(list, [current].concat(subset), index + 1);
        helper(list, subset, index + 1);
    }
    helper(nums);
    return res;
};