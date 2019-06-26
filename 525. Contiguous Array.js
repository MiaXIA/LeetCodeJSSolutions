// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// Example 1:
// Input: [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.

// Example 2:
// Input: [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
// Note: The length of the given binary array will not exceed 50,000.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = (nums) => {
    return nums.reduce(([b, h, r], x, i) => [
        b += x * 2 - 1, (h[b] = h[b] === undefined ? i : h[b], h), Math.max(r, i - h[b])
    ], [0, {0 : -1}, 0])[2];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = (nums) => {
    if (nums.length < 2) return 0;
    const sums = [0];
    const maxIndexes = { '0' : 0 };
    for (let i = 0; i < nums.length; i++) {
        sums.push(sums[i] + (nums[i] || -1));
        maxIndexes[sums[i + 1]] = i + 1;
    }
    let max = 0;
    for (let i = 0; i < sums.length; i++) {
        max = Math.max(max, maxIndexes[sums[i]] - i);
        if (max >= sums.length - i - 1) break;
    }
    return max;
};