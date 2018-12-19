// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

//Example
//Input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
//Output: 5

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = nums => {
    nums.forEach((n, index) => {
        while(n === nums[index + 1]) nums.splice(index + 1, 1);
    });
    return nums.length;
};

//Faster one
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = nums => {
    let index = 0;
    nums.forEach(n => {
        if(nums[index] !== n) {
            index++;
            nums[index] = n;
        }
    });
    return index + 1;
};