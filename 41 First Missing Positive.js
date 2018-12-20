// Given an unsorted integer array, find the smallest missing positive integer.

//Example
//Input: [3, 4, -1, 1]
//Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = nums => {
    var k = 1;
    while(true) {
        if(nums.includes(k)) k++;
        else return k;
    }
};