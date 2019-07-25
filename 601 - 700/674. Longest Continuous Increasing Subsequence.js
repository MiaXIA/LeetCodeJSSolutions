// Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).

// Example 1:
// Input: [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3. 
// Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4. 

// Example 2:
// Input: [2,2,2,2,2]
// Output: 1
// Explanation: The longest continuous increasing subsequence is [2], its length is 1. 
// Note: Length of the array will not exceed 10,000.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = (nums) => {
    let left = 0, right = 1, limit = nums.length - 1, max = 0, result = [];
    if (limit < 1) return nums.length;
  
    while (left < right && right <= limit) {
      if (nums[left] < nums[right]) {
        let active = true;
        max++
      } else {
        result.push(max);
        max = 0;
      }
      left++;
      right++;
    }
    result.push(max);
    return Math.max(...result) + 1
  }