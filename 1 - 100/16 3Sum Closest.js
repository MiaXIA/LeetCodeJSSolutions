//Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

//Example
//Input: nums = [-1, 2, 1, -4], target = 1
//Output: 2
//Explanation: the sum that is closest to the target is 2 (-1 + 2 + 1 = 2)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = (nums, target) => {
    var min = Math.abs(nums[0] + nums[1] + nums[2] - target);
    var result = nums[0] + nums[1] + nums[2];
    
    nums.sort((a, b) => a - b);
    for(var i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        var num1 = nums[i];
        var j = i + 1;
        var k = nums.length - 1;
        while(j < k) {
            while(j > i + 1 && j < k && nums[j] === nums[j - 1]) j++;
            while(k < nums.length - 1 && j < k && nums[k] === nums[k + 1]) k--;
            if(j === k) break;
            var num2 = nums[j];
            var num3 = nums[k];
            let temp = num1 + num2 + num3 - target;
            if(temp === 0) return target;
            if(temp > 0) {
                k--;
            } else {
                j++;
            }
            if(Math.abs(temp) < min) {
                min = Math.abs(temp);
                result = num1 + num2 + num3;
            }
        }
    }
    return result;
};

//Test
console.log(threeSumClosest([0, -1, 3, -2], 0));