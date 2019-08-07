// Given two integer arrays A and B, return the maximum length of an subarray that appears in both arrays.

// Example 1:
// Input:
// A: [1,2,3,2,1]
// B: [3,2,1,4,7]
// Output: 3
// Explanation: 
// The repeated subarray with maximum length is [3, 2, 1].
 
// Note:
// 1 <= len(A), len(B) <= 1000
// 0 <= A[i], B[i] < 100

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = (A, B) => {
    const dp = Array(A.length + 1)
     .fill(0)
     .map(() => Array(B.length + 1).fill(0));
 
   let maxLength = 0;
   for (let i = 1; i <= A.length; i++) {
     for (let j = 1; j <= B.length; j++) {
       if (A[i - 1] === B[j - 1]) {
         dp[i][j] = 1 + dp[i - 1][j - 1];
         maxLength = Math.max(maxLength, dp[i][j]);
       }
     }
   }
   return maxLength;
 };