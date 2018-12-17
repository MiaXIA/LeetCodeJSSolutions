//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//Example
//Input: nums = [2, 7, 11, 15], target = 9,
//Output: [0, 1]
//Explanation: nums[0] + nums[1] = 2 + 7 = 9

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
    const hash = {};
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] in hash) return [hash[nums[i]], i];
        hash[target - nums[i]] = i;
    }
    return [-1, -1];
};

//Test
console.log(twoSum([2, 7, 11, 15], 9));

//Runtime: 64ms