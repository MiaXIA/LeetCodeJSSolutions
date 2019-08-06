// Given an array nums of integers, you can perform operations on the array.
// In each operation, you pick any nums[i] and delete it to earn nums[i] points. After, you must delete every element equal to nums[i] - 1 or nums[i] + 1.
// You start with 0 points. Return the maximum number of points you can earn by applying such operations.

// Example 1:
// Input: nums = [3, 4, 2]
// Output: 6
// Explanation: 
// Delete 4 to earn 4 points, consequently 3 is also deleted.
// Then, delete 2 to earn 2 points. 6 total points are earned.
 
// Example 2:
// Input: nums = [2, 2, 3, 3, 3, 4]
// Output: 9
// Explanation: 
// Delete 3 to earn 3 points, deleting both 2's and the 4.
// Then, delete 3 again to earn 3 points, and 3 again to earn 3 points.
// 9 total points are earned.
 
// Note:
// The length of nums is at most 20000.
// Each element nums[i] is an integer in the range [1, 10000].

/**
 * @param {number[]} nums
 * @return {number}
 */
const pickMax = (arr) => {
    let dp = [];
    for (let i = 0; i < arr.length; i++) {
        dp[i] = Math.max(~~dp[i - 2] + arr[i], ~~dp[i - 1]);
    }
    return dp[arr.length - 1];
}

var deleteAndEarn = (nums) => {
    let map = {};
    nums.forEach(a => {
        map[a] = ~~map[a] + a;
    });
    let res = 0;
    Object.keys(map).forEach(key => {
        if (!(key in map)) return;
        key = parseInt(key);
        let arr = [];
        let p = key - 1;
        let q = key + 1;
        while (p in map) {
            arr.unshift(map[p]);
            delete map[p];
            p--;
        } 
        arr.push(map[key]);
        delete map[key];
        while (q in map) {
            arr.push(map[q]);
            delete map[q];
            q++;
        }
        res += pickMax(arr);
    });
    return res;
}; 