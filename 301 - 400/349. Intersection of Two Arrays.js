// Given two arrays, write a function to compute their intersection.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]

// Note:
// Each element in the result must be unique.
// The result can be in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = (nums1, nums2) => {
    let map = {};
    let res = [];
    for (let i = 0; i < nums1.length; i++) {
        if (map[nums1[i]] === undefined) map[nums1[i]] = 1;
    }
    for (let i = 0; i < nums2.length; i++) {
        if (map[nums2[i]] !== undefined) res.push(nums2[i]);
    }
    
    return Array.from(new Set(res));
};