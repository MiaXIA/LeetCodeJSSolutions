// Given an array of integers with possible duplicates, randomly output the index of a given target number. You can assume that the given target number must exist in the array.

// Note:
// The array size can be very large. Solution that uses too much extra space will not pass the judge.

// Example:
// int[] nums = new int[] {1,2,3,3,3};
// Solution solution = new Solution(nums);
// // pick(3) should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.
// solution.pick(3);
// // pick(1) should return 0. Since in the array only nums[0] is equal to 1.
// solution.pick(1);

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    var targets = [];
    this.findTarget(0, this.nums.length, target, targets);
    return targets[Math.floor(Math.random() * targets.length)];
};

Solution.prototype.findTarget = function(start, end, target, targets) {
    if (start + 1 === end || start === end) {
        if (this.nums[start] === target) targets.push(start);
        return;
    }
    var j = start + Math.floor((end - start) / 2);
    this.findTarget(start, j, target, targets);
    this.findTarget(j, end, target, targets);
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */