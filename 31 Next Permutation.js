// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
// The replacement must be in-place and use only constant extra memory.

//Example
//Input: 1, 2, 3
//Output: 1, 3, 2

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const swap = (nums, i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}

const reverseSort = (nums, start, end) => {
    if (start > end) return;
    let mid = Math.floor((start + end) / 2);
    for (let i = start; i <= mid; i++) swap(nums, i, start + end - i);
}

var nextPermutation = nums => {
    if (!nums || nums.length < 2) return;    
    let n = nums.length, i = n - 1, j = n - 1;
    while (i > 0 && nums[i] <= nums[i - 1]) i--;
    if (i === 0) return reverseSort(nums, 0, n - 1);
    while (j > i && nums[j] <= nums[i - 1]) j--;
    swap(nums, i - 1, j);
    reverseSort(nums, i, n - 1);
};