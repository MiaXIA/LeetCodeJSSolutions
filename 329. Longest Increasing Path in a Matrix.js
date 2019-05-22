// Given an integer matrix, find the length of the longest increasing path.
// From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

// Example 1:
// Input: nums = 
// [
//   [9,9,4],
//   [6,6,8],
//   [2,1,1]
// ] 
// Output: 4 
// Explanation: The longest increasing path is [1, 2, 6, 9].

// Example 2:
// Input: nums = 
// [
//   [3,4,5],
//   [3,2,6],
//   [2,2,1]
// ] 
// Output: 4 
// Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

/**
 * @param {number[][]} matrix
 * @return {number}
 */
const helper = (matrix, x, y, prevNum, memo) => {
    if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length) return 0;
    else if (matrix[x][y] <= prevNum) return 0;
    else if (memo[x][y]) return memo[x][y];
    
    const longestPath = Math.max(
    helper(matrix, x + 1, y, matrix[x][y], memo),
    helper(matrix, x - 1, y, matrix[x][y], memo),
    helper(matrix, x, y + 1, matrix[x][y], memo),
    helper(matrix, x, y - 1, matrix[x][y], memo));
    
    memo[x][y] = longestPath + 1;
    return memo[x][y];
}

var longestIncreasingPath = (matrix) => {
    const memo = new Array(matrix.length).fill(null).map(row => new Array(matrix[0].length));
    helper(matrix, 0, 0, -Infinity, memo);
    
    let max = -Infinity;
    for (let x = 0; x < memo.length; x++) {
        for (let y = 0; y < memo[0].length; y++) {
            max = Math.max(max, helper(matrix, x, y, -Infinity, memo));
        }
    }
    return max === -Infinity ? 0 : max;
};