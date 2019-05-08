// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
// Note: The algorithm should run in linear time and in O(1) space.

// Example 1:
// Input: [3,2,3]
// Output: [3]

// Example 2:
// Input: [1,1,1,3,3,2,2,2]
// Output: [1,2]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const countEles = (arr) => {
    var res = {};
    var set = {};
    for (var i = 0; i < arr.length; i++) {
        var ele = arr[i];
        if (!set[ele]) set[ele] = 1;
        else set[ele]++;
        
        if (!res[ele] && (set[ele] / arr.length) > (1/3)) res[ele] = 1;
    }
    return Object.keys(res).map(Number);
}

var majorityElement = (nums) => {
    var res = countEles(nums);
    return res;
};