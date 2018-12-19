// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Your algorithm's runtime complexity must be in the order of O(log n).

//Example
//Input: nums = [4, 5, 6, 7, 0, 1, 2], target  = 0
//Output: 4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = (nums, target) => {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        const mid = Math.floor((high - low) / 2) + low;
        const descendingCondition = target >= nums[mid] || target <= nums[high];
        const ascendingCondition = target >= nums[mid] && target <= nums[high];
        const isRight = nums[high] - nums[mid] >= 0 ? ascendingCondition : descendingCondition;
        
        if (nums[mid] === target) {
            return mid;
        } else if (isRight) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }    
    return -1;
};

//Test
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));