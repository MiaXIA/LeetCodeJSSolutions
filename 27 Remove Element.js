// Given an array nums and a value val, remove all instances of that value in-place and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

//Example
//Input: nums = [3, 2, 2 ,3], val = 3
//Output: [2, 2] => length = 2

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = (nums, val) => {
    for(var i = nums.length - 1; i >= 0; i--) {
        if(nums[i] === val) nums.splice(i, 1);
    }
    return nums.length;
};

//Test
console.log(removeElement([0, 1, 2, 3], 3));