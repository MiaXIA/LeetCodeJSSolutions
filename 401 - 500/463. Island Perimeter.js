// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.
// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
// The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Example:
// Input:
// [[0,1,0,0],
//  [1,1,1,0],
//  [0,1,0,0],
//  [1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image below:

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = (grid) => {
    const m = grid[0].length;
    const n = grid.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i] && grid[i][j] === 1) {
                sum += 4;
                if (grid[i][j - 1] === 1) sum -= 1;
                if (grid[i][j + 1] === 1) sum -= 1;
                if (grid[i - 1] && grid[i - 1][j] === 1) sum -= 1;
                if (grid[i + 1] && grid[i + 1][j] === 1) sum -= 1;
            }
        }
    }
    return sum;
};