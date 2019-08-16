// In a 2D grid from (0, 0) to (N-1, N-1), every cell contains a 1, except those cells in the given list mines which are 0. What is the largest axis-aligned plus sign of 1s contained in the grid? Return the order of the plus sign. If there is none, return 0.
// An "axis-aligned plus sign of 1s of order k" has some center grid[x][y] = 1 along with 4 arms of length k-1 going up, down, left, and right, and made of 1s. This is demonstrated in the diagrams below. Note that there could be 0s or 1s beyond the arms of the plus sign, only the relevant area of the plus sign is checked for 1s.
// Examples of Axis-Aligned Plus Signs of Order k:
// Order 1:
// 000
// 010
// 000
// Order 2:
// 00000
// 00100
// 01110
// 00100
// 00000
// Order 3:
// 0000000
// 0001000
// 0001000
// 0111110
// 0001000
// 0001000
// 0000000

// Example 1:
// Input: N = 5, mines = [[4, 2]]
// Output: 2
// Explanation:
// 11111
// 11111
// 11111
// 11111
// 11011
// In the above grid, the largest plus sign can only be order 2.  One of them is marked in bold.

// Example 2:
// Input: N = 2, mines = []
// Output: 1
// Explanation:
// There is no plus sign of order 2, but there is of order 1.

// Example 3:
// Input: N = 1, mines = [[0, 0]]
// Output: 0
// Explanation:
// There is no plus sign, so return 0.

// Note:
// N will be an integer in the range [1, 500].
// mines will have length at most 5000.
// mines[i] will be length 2 and consist of integers in the range [0, N-1].
// (Additionally, programs submitted in C, C++, or C# will be judged with a slightly smaller time limit.)

/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */

const isZero = (dp, [i, j]) => {
    return dp[i][j] === 0;
  }
  
  var orderOfLargestPlusSign = (N, mines) => {
    const dp = [...new Array(N)].map(() => new Array(N).fill(N));
    for (const [i, j] of mines) {
      dp[i][j] = 0;
    }
    for (let i = 0; i < N; i++) {
      let left = 0, right = 0;
      for (let j = 0; j < N; j++) {
        left = !isZero(dp, [i, j]) ? left + 1 : 0;
        dp[i][j] = Math.min(dp[i][j], left);
      }
      for (let j = N - 1; j >= 0; j--) {
        right = !isZero(dp, [i, j]) ? right + 1 : 0;
        dp[i][j] = Math.min(dp[i][j], right);
      }
    }
    for (let j = 0; j < N; j++) {
      let top = 0, bottom = 0;
      for (let i = 0; i < N; i++) {
        top = !isZero(dp, [i, j]) ? top + 1 : 0;
        dp[i][j] = Math.min(dp[i][j], top);
      }
      for (let i = N - 1; i >= 0; i--) {
        bottom = !isZero(dp, [i, j]) ? bottom + 1 : 0;
        dp[i][j] = Math.min(dp[i][j], bottom);
      }
    }
    let output = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        output = Math.max(output, dp[i][j]);
      }
    }
    return output;
  };