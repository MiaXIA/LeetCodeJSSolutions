// Given a sorted positive integer array nums and an integer n, add/patch elements to the array such that any number in range [1, n] inclusive can be formed by the sum of some elements in the array. Return the minimum number of patches required.

// Example 1:
// Input: nums = [1,3], n = 6
// Output: 1 
// Explanation:
// Combinations of nums are [1], [3], [1,3], which form possible sums of: 1, 3, 4.
// Now if we add/patch 2 to nums, the combinations are: [1], [2], [3], [1,3], [2,3], [1,2,3].
// Possible sums are 1, 2, 3, 4, 5, 6, which now covers the range [1, 6].
// So we only need 1 patch.

// Example 2:
// Input: nums = [1,5,10], n = 20
// Output: 2
// Explanation: The two patches can be [2, 4].

// Example 3:
// Input: nums = [1,2,2], n = 5
// Output: 0

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = (nums, n) => {
    var covered = 1, count = 0, i = 0;
    
    while (covered <= n) {
        if (i >= nums.length || covered < nums[i]) {
            count++;
            covered += covered;
        } else covered += nums[i++];
    }
    return count;
};

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = (nums, n) => {
    for (var sum = 0, index = 0, added = 0; sum < n;) {
        added += index === nums.length || nums[index] > sum + 1 ? 1 : 0;
        sum += (nums[index] || n) > sum + 1 ? sum + 1 : nums[index++];
    }
    return added;
};