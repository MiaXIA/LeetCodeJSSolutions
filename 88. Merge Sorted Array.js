// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

// Example:
// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
// Output: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = (nums1, m, nums2, n) => {
    const nums = nums1.slice(0, m).concat(nums2.slice(0, n));
    nums.sort((a, b) => a - b);
    nums.forEach((_n, i) => nums1[i] = _n);
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = (nums1, m, nums2, n) => {
    let len = m + n;
    m--;
    n--;
    
    while (n >= 0) {
        len--;
        if (nums1[m] > nums2[n]) nums1[len] = nums1[m--];
        else nums1[len] = nums2[n--];
    }
};