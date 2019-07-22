// Given an integer array, find three numbers whose product is maximum and output the maximum product.

// Example 1:
// Input: [1,2,3]
// Output: 6
 
// Example 2:
// Input: [1,2,3,4]
// Output: 24
 
// Note:
// The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
// Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = (nums) => {
    let max1 = max2 = max3 = -1e4;
    let min1 = min2 = 1e4;
    nums.forEach(e => {
        if (e > max1) [max3, max2, max1] = [max2, max1, e];
        else if (e > max2) [max3, max2] = [max2, e];
        else if (e > max3) max3 = e;
        if (e < min1) [min2, min1] = [min1, e];
        else if (e < min2) min2 = e;
    });
    return max1 * Math.max(min1 * min2, max2 * max3);
};