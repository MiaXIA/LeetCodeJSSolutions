// On a N * N grid, we place some 1 * 1 * 1 cubes.
// Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).
// Return the total surface area of the resulting shapes.

// Example 1:
// Input: [[2]]
// Output: 10

// Example 2:
// Input: [[1,2],[3,4]]
// Output: 34

// Example 3:
// Input: [[1,0],[0,2]]
// Output: 16

// Example 4:
// Input: [[1,1,1],[1,0,1],[1,1,1]]
// Output: 32

// Example 5:
// Input: [[2,2,2],[2,1,2],[2,2,2]]
// Output: 46
 
// Note:
// 1 <= N <= 50
// 0 <= grid[i][j] <= 50

/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = (grid) => {
    let surface = 0, surfaceOfOneElement = 0;
    for (let i = 0; i<grid.length; i++){
        for (let j = 0; j < grid[0].length; j++) {
            surface += grid[i][j] == 0 ? 0 : grid[i][j] == 1 ? 6 : 6 + (grid[i][j] - 1) * 4;
            surfaceOfOneElement = 0;
            if (i - 1 >= 0) surfaceOfOneElement += Math.min(grid[i - 1][j], grid[i][j]);
            if (i + 1 < grid.length) surfaceOfOneElement += Math.min(grid[i + 1][j], grid[i][j]);
            if (j - 1 >= 0) surfaceOfOneElement += Math.min(grid[i][j - 1], grid[i][j]);
            if (j + 1 < grid[0].length) surfaceOfOneElement += Math.min(grid[i][j + 1], grid[i][j]);
            surface -= surfaceOfOneElement;
        }
    }
    return surface;
};