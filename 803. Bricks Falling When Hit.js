// We have a grid of 1s and 0s; the 1s in a cell represent bricks.  A brick will not drop if and only if it is directly connected to the top of the grid, or at least one of its (4-way) adjacent bricks will not drop.
// We will do some erasures sequentially. Each time we want to do the erasure at the location (i, j), the brick (if it exists) on that location will disappear, and then some other bricks may drop because of that erasure.
// Return an array representing the number of bricks that will drop after each erasure in sequence.

// Example 1:
// Input: 
// grid = [[1,0,0,0],[1,1,1,0]]
// hits = [[1,0]]
// Output: [2]
// Explanation: 
// If we erase the brick at (1, 0), the brick at (1, 1) and (1, 2) will drop. So we should return 2.

// Example 2:
// Input: 
// grid = [[1,0,0,0],[1,1,0,0]]
// hits = [[1,1],[1,0]]
// Output: [0,0]
// Explanation: 
// When we erase the brick at (1, 0), the brick at (1, 1) has already disappeared due to the last move. So each erasure will cause no bricks dropping.  Note that the erased brick (1, 0) will not be counted as a dropped brick.
 
// Note:
// The number of rows and columns in the grid will be in the range [1, 200].
// The number of erasures will not exceed the area of the grid.
// It is guaranteed that each erasure will be different from any other erasure, and located inside the grid.
// An erasure may refer to a location with no brick - if it does, no bricks drop.

/**
 * @param {number[][]} grid
 * @param {number[][]} hits
 * @return {number[]}
 */
const EXIST = 100000000;
const NOT_EXIST = 0;

var hitBricks = (grid, hits) => {
    let hitsTime = hits.length;
    let result = Array(hitsTime).fill(0);
    let row = grid.length;
    let col = grid[0].length;
    let gridStatus = Array(row).fill(0).map(() => Array(col).fill(0));

    for (let i = 0; i < hitsTime; i++) {
        let hit = hits[i];
        if (gridStatus[hit[0]][hit[1]] == 0) {
            gridStatus[hit[0]][hit[1]] = (i + 1);
        }
    }

    for (let i = 0; i < col; i++) {
        active(grid, gridStatus, 0, i);
    }

    for (let i = hitsTime - 1; i >= 0; i--) {
        let hit = hits[i];
        result[i] = restore(grid, gridStatus, hit[0], hit[1], i + 1);
        result[i] = result[i] == 0 ? 0 : (result[i] - 1);
    }

    return result;
}

const restore = (grid, gridStatus, x, y, version) => {
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) {
        return 0;
    }
    if (grid[x][y] == 0) {
        return 0;
    }
    if (gridStatus[x][y] == EXIST) {
        return 0;
    }
    if (gridStatus[x][y] != NOT_EXIST && gridStatus[x][y] < version) {
        return 0;
    }
    if ((exist(gridStatus, x - 1, y) || exist(gridStatus, x + 1, y) || exist(gridStatus, x, y - 1) || exist(gridStatus, x, y + 1)) == false) {
        return 0;
    }
    gridStatus[x][y] = EXIST;
    return 1 + restore(grid, gridStatus, x - 1, y, version) + restore(grid, gridStatus, x + 1, y, version) + restore(grid, gridStatus, x, y - 1, version) + restore(grid, gridStatus, x, y + 1, version);
}

const exist = (gridStatus, x, y) => {
    if (x >= gridStatus.length || y < 0 || y >= gridStatus[0].length) {
        return false;
    }
    return x < 0 || gridStatus[x][y] == EXIST;
}
    
const active = (grid, gridStatus, x, y) => {
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) {
        return;
    }
    if (gridStatus[x][y] != NOT_EXIST || grid[x][y] == 0) {
        return;
    }
    gridStatus[x][y] = EXIST;
    active(grid, gridStatus, x - 1, y);
    active(grid, gridStatus, x + 1, y);
    active(grid, gridStatus, x, y - 1);
    active(grid, gridStatus, x, y + 1);
}