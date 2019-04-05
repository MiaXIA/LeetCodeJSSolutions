// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:
// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = (nums) => {
    const r = [];
    const func = (arr, _r=[]) => {
        if (arr.length === 0) r.push(_r);
        else {
            func(arr.slice(1), _r.concat(arr[0]));
            func(arr.slice(1), _r);
        }
    }
    func(nums);
    return r;
};
