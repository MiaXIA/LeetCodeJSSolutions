// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.
// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

// Example 1:
// Input: [1, 2, 2, 3, 1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.

// Example 2:
// Input: [1,2,2,3,1,4,2]
// Output: 6

// Note:
// nums.length will be between 1 and 50,000.
// nums[i] will be an integer between 0 and 49,999.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = (nums) => {
    let map = {};
    for (let i = 0 ; i < nums.length; i++) {
        if (nums[i] in map) {
            let temp = map[nums[i]];
            temp[1] = i;
            temp[2]++;
        } else {
            map[nums[i]] = [i,i,1];
        }
    }
    let res = nums.length, max = 0;
    Object.keys(map).forEach((key) => {
        let temp = map[key];
        if (temp[2] > max) {
            max = temp[2];
            res = temp[1] - temp[0];
        } else if(temp[2] === max) {
            res = Math.min(res, temp[1] - temp[0]);
        }
    }); 
    return res + 1;
};