// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
// The same repeated number may be chosen from candidates unlimited number of times.
// Note:
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.

//Example
//Input: candidates = [2, 3, 6, 7], target = 7
//Output:
// [
//     [7],
//     [2, 2, 3]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = (candidates, target) => {
    if(!candidates || !candidates.length) return [];
    let res = [];
    
    let dfs = (candidates, tempt, remain, start) => {
        if(remain < 0) return;
        else if (remain === 0) {
            res.push(tempt.slice());
            return;
        } else {
            for(let i = start; i < candidates.length; i++) {
                tempt.push(candidates[i]);
                dfs(candidates, tempt, remain - candidates[i], i);
                tempt.pop();
            }
        }
    }
    dfs(candidates, [], target, 0);
    return res;
};