// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:
// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.

// Example 2:
// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.

/**
 * @param {number[][]} grid
 * @return {number}
 */
const dr = [-1, 0, 1, 0];
const dc = [0,  1, 0, -1];

const dfs = (row, col, rowLen, colLen, grid) => {
    if (grid[row][col] !== 1) return 0;
    grid[row][col] = -1;
    let s = 0;
    for (let k = 0; k < 4; k++) {
        const nr = row + dr[k];
        const nc = col + dc[k];
        if (0 <= nr && nr < rowLen &&
            0 <= nc && nc < colLen &&
            grid[nr][nc] === 1
		) {
            s += 1 + dfs(nr, nc, rowLen, colLen, grid);
        }
    }
    return s;
}

var maxAreaOfIsland = (grid) => {
    const rowLen = grid.length;
    if (rowLen === 0) return 0;

    const colLen = grid[0].length;
    if (colLen === 0) return 0;
    
    let max = 0;
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (grid[row][col] === 1) {
                max = Math.max(max, 1 + dfs(row, col, rowLen, colLen, grid));
            }
        }
    }
    return max;
};