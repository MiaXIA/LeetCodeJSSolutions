// Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.

// Example:
// nums = [1, 2, 3]
// target = 4
// The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
// Note that different sequences are counted as different combinations.
// Therefore the output is 7.
 
// Follow up:
// What if negative numbers are allowed in the given array?
// How does it change the problem?
// What limitation we need to add to the question to allow negative numbers?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = (nums, target) => {
    nums.sort((a, b) => a - b);
    let counter = 0;
    const res = [1];
    
    const dfs = leftTarget => {
        if (res[leftTarget] !== undefined) {
            counter += res[leftTarget];
            return;
        }
        if (leftTarget === 0) {
            counter += 1;
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > leftTarget) break;
            dfs(leftTarget - nums[i]);
        }
    }
    
    for (let i = 1; i <= target; i++) {
        counter = 0;
        dfs(i);
        res[i] = counter;
    }
    
    return res[target];
};