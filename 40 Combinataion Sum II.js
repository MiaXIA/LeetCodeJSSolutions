// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
// Each number in candidates may only be used once in the combination.
// Note:
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.

//Example
//Input: candidates = [10, 1, 2, 7, 6, 1, 5], target = 8
//Output: 
// [
//     [1, 7],
//     [1, 2, 5],
//     [2, 6],
//     [1, 1, 6]
//   ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = (candidates, target) => {
    if( !candidates.length || !candidates) return [];
    let res = [];
    candidates.sort((a, b) => a - b);
    
    let backTrack = (nums, target, temp, start) => {
        if(target === 0) return res.push(temp.slice());
        for(let i = start; i < nums.length && target >= nums[i]; i++) {
            if(i !== start && nums[i] === nums[i - 1]) continue;
            temp.push(nums[i]);
            backTrack(nums, target - nums[i], temp, i + 1);
            temp.pop();
        }
        return;
    }
    backTrack(candidates, target, [], 0);
    return res;
};