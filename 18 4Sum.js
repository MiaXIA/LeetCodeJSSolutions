// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
// Note:
// The solution set must not contain duplicate quadruplets.

//Example
//Input: nums = [1, 0, -1, 0, -2, 2], target = 0
//Output: 
//[
//     [-1, 0, 0, 1],
//     [-2, -1, 1, 2];
//     [-2, 0, 0, 2];
// ]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = (nums, target) => {
    var res = [];
    if(nums.length < 4) return res;
    nums = nums.sort((a, b) => a - b);
    
    for(var i = 0; i <= nums.length - 4; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        
        var threetarget = target - nums[i];
        for(var j = i + 1; j <= nums.length - 3; j++) {
            if(j > i + 1 && nums[j] === nums[j - 1]) continue;
            for(var low = j + 1, high = nums.length - 1; low < high; ) {
                var sum = nums[j] + nums[low] + nums[high];
                if(sum === threetarget) {
                    res.push([nums[i], nums[j], nums[low], nums[high]]);
                    while(low < high && nums[low] === nums[low + 1]) low++;
                    while(low < high && nums[high] === nums[high - 1]) high--;
                    low++;
                    high--;
                } else if(sum > threetarget) {
                    high--;
                } else {
                    low++;
                }
            }
        }
    }
    return res;
};

//Test
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));