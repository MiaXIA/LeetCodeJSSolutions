// Given an array of non-negative integers, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Your goal is to reach the last index in the minimum number of jumps.

//Example
//Input: [2, 3, 1, 1, 4]
//Output: 2
//Explanation: the minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = nums => {
    var curr = 0, jumps = 0, maxReach = 0, index = 0, newIndex;
    
    if(nums.length <= 1) return 0;
    while(index < nums.length) {
        if(index + nums[index] > maxReach) {
            newIndex = index;
            maxReach = index + nums[index];
        }
        if(index >= (curr + nums[curr])) {
            jumps++;
            curr = newIndex;
        }
        if(curr + nums[curr] >= nums.length - 1) {
            jumps++;
            break;
        }
        index ++;
    }
    return jumps;
};