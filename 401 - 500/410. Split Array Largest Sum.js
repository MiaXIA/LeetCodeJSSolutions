// Given an array which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays. Write an algorithm to minimize the largest sum among these m subarrays.

// Note:
// If n is the length of array, assume the following constraints are satisfied:
// 1 ≤ n ≤ 1000
// 1 ≤ m ≤ min(50, n)

// Examples:
// Input:
// nums = [7,2,5,10,8]
// m = 2
// Output:
// 18
// Explanation:
// There are four ways to split nums into two subarrays.
// The best way is to split it into [7,2,5] and [10,8],
// where the largest sum among the two subarrays is only 18.

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = (nums, m) => {
    let left = Math.max(...nums);
    let right = nums.reduce((a, b) => a + b);
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let sum = 0;
        let count = 1;
        
        for (const num of nums) {
            if (sum + num > mid) {
                if (++count > m) break;
                sum = num;
            } else sum += num;
        }
        
        if (count <= m) right = mid - 1;
        else left = mid + 1;
    }
    return left;
};