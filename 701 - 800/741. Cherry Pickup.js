// In a N x N grid representing a field of cherries, each cell is one of three possible integers.
// 0 means the cell is empty, so you can pass through;
// 1 means the cell contains a cherry, that you can pick up and pass through;
// -1 means the cell contains a thorn that blocks your way.
// Your task is to collect maximum number of cherries possible by following the rules below:
// Starting at the position (0, 0) and reaching (N-1, N-1) by moving right or down through valid path cells (cells with value 0 or 1);
// After reaching (N-1, N-1), returning to (0, 0) by moving left or up through valid path cells;
// When passing through a path cell containing a cherry, you pick it up and the cell becomes an empty cell (0);
// If there is no valid path between (0, 0) and (N-1, N-1), then no cherries can be collected.
 
// Example 1:
// Input: grid =
// [[0, 1, -1],
//  [1, 0, -1],
//  [1, 1,  1]]
// Output: 5
// Explanation: 
// The player started at (0, 0) and went down, down, right right to reach (2, 2).
// 4 cherries were picked up during this single trip, and the matrix becomes [[0,1,-1],[0,0,-1],[0,0,0]].
// Then, the player went left, up, up, left to return home, picking up one more cherry.
// The total number of cherries picked up is 5, and this is the maximum possible.
 
// Note:
// grid is an N by N 2D array, with 1 <= N <= 50.
// Each grid[i][j] is an integer in the set {-1, 0, 1}.
// It is guaranteed that grid[0][0] and grid[N-1][N-1] are not -1.
 
/**
 * @param {number[][]} grid
 * @return {number}
 */
const get = (dp, n, i, j, x, defaultVal = -Infinity) => {
    if (i < 0 || i >= n || j < 0 || j >= n || x < 0 || x >= n) {
      return defaultVal;
    }
    return dp[i][j][x];
  }
  
  var cherryPickup = (grid) => {
    const n = grid.length;
    const dp = [...new Array(n)].map(() =>
      [...new Array(n)].map(() => [...new Array(n).fill(-Infinity)]),
    );
    dp[0][0][0] = grid[0][0];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        for (let x = 0; x < n; x++) {
          const y = i + j - x;
          const isValid =
            !(grid[i][j] === -1 || grid[x][y] === -1) && y >= 0 && y < n && dp[i][j][x] < 0;
          if (isValid) {
            const max = Math.max(
              get(dp, n, i - 1, j, x - 1),
              get(dp, n, i - 1, j, x),
              get(dp, n, i, j - 1, x),
              get(dp, n, i, j - 1, x - 1),
            );
            if (max >= 0) {
              dp[i][j][x] = max + (!(i === x && j === y) ? grid[i][j] + grid[x][y] : grid[i][j]);
            }
          }
        }
      }
    }
    return dp[n - 1][n - 1][n - 1] > 0 ? dp[n - 1][n - 1][n - 1] : 0;
  };