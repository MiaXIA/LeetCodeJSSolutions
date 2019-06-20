// Given an integer array, your task is to find all the different possible increasing subsequences of the given array, and the length of an increasing subsequence should be at least 2 .

// Example:
// Input: [4, 6, 7, 7]
// Output: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
// Note:
// The length of the given array will not exceed 15.
// The range of integer in the given array is [-100,100].
// The given array may contain duplicates, and two equal integers should also be considered as a special case of increasing sequence.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = (nums) => {
    let len = nums.length, ans = [], res = [];
  
    let s = new Set();
  
    let dfs = (index) => {
      if (res.length > 1) {
        let str = res.toString();
        if (!s.has(str)) {
          ans.push(res.concat());
          s.add(str);
        }
      }
  
      for (let i = index; i < len; i++) {
        let item = nums[i];
  
        if (res.length === 0 || item >= res[res.length - 1]) {
          res.push(item);
          dfs(i + 1);
          res.pop();
        }
      }
    };
  
    dfs(0);
  
    return ans;
  };