// Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.
// The distance between two adjacent cells is 1.

// Example 1:
// Input:
// [[0,0,0],
//  [0,1,0],
//  [0,0,0]]
// Output:
// [[0,0,0],
//  [0,1,0],
//  [0,0,0]]

// Example 2:
// Input:
// [[0,0,0],
//  [0,1,0],
//  [1,1,1]]
// Output:
// [[0,0,0],
//  [0,1,0],
//  [1,2,1]]
 
// Note:
// The number of elements of the given matrix will not exceed 10,000.
// There are at least one 0 in the given matrix.
// The cells are adjacent in only four directions: up, down, left and right.

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 1) resolve(matrix, i, j);
        }
    }
    return matrix;
};

const isvisited = (neighbor, visited) => {
    for (let i = 0; i < visited.length; i++) {
        if (visited[i].row === neighbor.row && visited[i].col === neighbor.col) return true;
    }
    return false;
}

const resolve = (matrix, row, col) => {
    let cell = { row: row, col: col };
    let queue = [];
    let visited = [];
    queue.push(cell);
    
    let directions = [
        { row: -1, col: 0 },
        { row: 0, col: 1 },
        { row: 1, col: 0 },
        { row: 0, col: -1 },
    ];
    
    while (queue.length > 0) {
        let cur = queue.shift();
        visited.push(cur);
        for (var i = 0; i < directions.length; i++) {
            let neighbor = {
                row: cur.row + directions[i].row,
                col: cur.col + directions[i].col
            };
            if (neighbor.row >= 0 && neighbor.row < matrix.length) {
                if (neighbor.col >= 0 && neighbor.col < matrix[0].length) {
                    if (!isvisited(neighbor, visited)) {
                        if (matrix[neighbor.row][neighbor.col] === 0) {
                            let rowDist = Math.abs(neighbor.row - row);
                            let colDist = Math.abs(neighbor.col - col);
                            matrix[row][col] = rowDist + colDist;
                            return;
                        }
                        queue.push(neighbor);
                        visited.push(neighbor);
                    }
                }
            }
        }
    }
}