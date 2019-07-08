// Given an array consists of non-negative integers, your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

// Example 1:
// Input: [2,2,3,4]
// Output: 3
// Explanation:
// Valid combinations are: 
// 2,3,4 (using the first 2)
// 2,3,4 (using the second 2)
// 2,2,3
// Note:
// The length of the given array won't exceed 1000.
// The integers in the given array are in the range of [0, 1000].

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = (nums) => {
    nums.sort((a, b) => a - b);
    let res = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === 0) continue;
        let k = i + 2;
        for (let j = i + 1; j < nums.length - 1; j++) {
            if (nums[j] === 0) continue;
            for (; k < nums.length; k++) {
                if (nums[i] + nums[j] > nums[k]) continue;
                else {
                    res += k - j - 1;
                    break;
                }
            }
            if (k === nums.length) res += k - j - 1;
        }
    }
    return res;
};