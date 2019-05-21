// Given two arrays of length m and n with digits 0-9 representing two numbers. Create the maximum number of length k <= m + n from digits of the two. The relative order of the digits from the same array must be preserved. Return an array of the k digits.

// Note: You should try to optimize your time and space complexity.

// Example 1:
// Input:
// nums1 = [3, 4, 6, 5]
// nums2 = [9, 1, 2, 5, 8, 3]
// k = 5
// Output:
// [9, 8, 6, 5, 3]

// Example 2:
// Input:
// nums1 = [6, 7]
// nums2 = [6, 0, 4]
// k = 5
// Output:
// [6, 7, 6, 0, 4]

// Example 3:
// Input:
// nums1 = [3, 9]
// nums2 = [8, 9]
// k = 3
// Output:
// [9, 8, 9]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
const compare = (nums1, i, nums2, j) => {
    while (i < nums1.length && j < nums2.length && nums1[i] === nums2[j]) {
        i++;
        j++;
    }
    return j === nums2.length || (i < nums1.length && nums1[i] > nums2[j]);
}

const merge = (nums1, nums2, max) => {
    let res = Array(max).fill(0);
    for (let i = 0, index1 = 0, index2 = 0; i < max; i++) {
        res[i] = compare(nums1, index1, nums2, index2) ? nums1[index1++] : nums2[index2++];
    }
    return res;
}

const maxSubArray = (nums, max) => {
    let res = Array(max).fill(0);
    for (let numsIndex = 0, stackIndex = 0; numsIndex < nums.length; numsIndex++) {
        while (stackIndex > 0 && nums[numsIndex] > res[stackIndex - 1] && nums.length - numsIndex > max - stackIndex) stackIndex--;
        if (stackIndex < max) res[stackIndex++] = nums[numsIndex];
    }
    return res;
}

var maxNumber = (nums1, nums2, k) => {
    let m = nums1.length;
    let n = nums2.length;
    let res = Array(k).fill(0);
    for (let i = Math.max(0, k - n); i <= k && i <= m; i++) {
        let candidate = merge(maxSubArray(nums1, i), maxSubArray(nums2, k - i), k);
        if (compare(candidate, 0, res, 0)) res = candidate;
    }
    return res;
};