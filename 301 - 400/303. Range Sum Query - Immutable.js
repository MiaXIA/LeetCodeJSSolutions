// Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

// Example:
// Given nums = [-2, 0, 3, -5, 2, -1]
// sumRange(0, 2) -> 1
// sumRange(2, 5) -> -1
// sumRange(0, 5) -> -3
// Note:
// You may assume that the array does not change.
// There are many calls to sumRange function.

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
class NumArray {
    constructor(nums) {
        this.nums = nums
        this.sum = Array(nums.length + 1).fill(0)
        for (let i = 0; i < nums.length; i++) {
            this.sum[i + 1] = this.sum[i] + this.nums[i];
        }
    }
    
    sumRange(i, j) {
        return this.sum[j + 1] - this.sum[i];
    }
};