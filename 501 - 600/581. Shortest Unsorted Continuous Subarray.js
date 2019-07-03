// Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.
// You need to find the shortest such subarray and output its length.

// Example 1:
// Input: [2, 6, 4, 8, 10, 9, 15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
// Note:
// Then length of the input array is in range [1, 10,000].
// The input array may contain duplicates, so ascending order here means <=.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = (nums) => {
    let len = nums.length;
    if (len <= 1) return 0;
    let itermax = {
        max: nums[0],
        q: 0,
        take: function(a, i) {
            if (a >= this.max) this.max = a;
            else this.q = i;
        }
    }
    let itermin = {
        min: nums[nums.length - 1],
        p: nums.length - 1,
        take: function(a, i) {
            if (a <= this.min) this.min = a;
            else this.p = i;
        }
    }
    for (let i = 0; i < len; i++) {
        itermax.take(nums[i], i);
        itermin.take(nums[len - 1 - i], len - 1 - i);
    }
    let res = itermax.q - itermin.p + 1;
    return res > 0 ? res : 0;
};