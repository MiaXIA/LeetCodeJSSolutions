// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input:
// 11110
// 11010
// 11000
// 00000
// Output: 1

// Example 2:
// Input:
// 11000
// 11000
// 00100
// 00011
// Output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */
const identifyLand = (grid, rowIndex, index) => {
    if (rowIndex >= grid.length || index >= grid[0].length || index < 0 || rowIndex < 0) return;
    else if (grid[rowIndex][index] === '0') return;
    else {
        grid[rowIndex][index] = '0';
        identifyLand(grid, rowIndex + 1, index);
        identifyLand(grid, rowIndex - 1, index);
        identifyLand(grid, rowIndex, index + 1);
        identifyLand(grid, rowIndex, index - 1);
    }
}

var numIslands = (grid) => {
    let res = 0;
    grid.forEach((row, rowIndex) => {
        row.forEach((value, index) => {
            if (value === '1') {
                res++;
                identifyLand(grid, rowIndex, index)
            }
        })
    })
    return res;
};