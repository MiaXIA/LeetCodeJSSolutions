// Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.
// Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.
// Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

// Note:
// The order of returned grid coordinates does not matter.
// Both m and n are less than 150.

// Example:
// Given the following 5x5 matrix:
//   Pacific ~   ~   ~   ~   ~ 
//        ~  1   2   2   3  (5) *
//        ~  3   2   3  (4) (4) *
//        ~  2   4  (5)  3   1  *
//        ~ (6) (7)  1   4   5  *
//        ~ (5)  1   1   2   4  *
//           *   *   *   *   * Atlantic
// Return:
// [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const inBounds = (matrix, row, col) => {
    return row >= 0 && col >= 0 && row < matrix.length && col < matrix[0].length;
  }
  
  const bfs = (matrix, startRow, startCol) => {
    const queue = [{ row: startRow, col: startCol }];
    const visited = new Set([startRow + "," + startCol]);
    
    let atlanticReached = false;
    let pacificReached  = false;
    
    while (queue.length) {
      const { row, col } = queue.shift();
      if(row === 0 || col === 0) pacificReached = true;
      
      if(row === matrix.length - 1 || col === matrix[0].length - 1) atlanticReached = true;
      
      const neighbors = [[row + 1, col], [row - 1, col], [row, col - 1], [row, col + 1]];
      for (let neighbor of neighbors) {
        const neighborRow = neighbor[0];
        const neighborCol = neighbor[1];
        const visitedString = neighborRow + "," + neighborCol;
        
        if (visited.has(visitedString)) continue;
        if (inBounds(matrix, neighborRow, neighborCol) && matrix[row][col] >= matrix[neighborRow][neighborCol]) {
          visited.add(visitedString);
          queue.push({ row: neighborRow, col: neighborCol })
        }
      }
    }
    
    return atlanticReached && pacificReached;
  }
  
  var pacificAtlantic = (matrix) => {
      const res = [];
      matrix.forEach((row, rowIdx) => {
          row.forEach((ele, colIdx) => {
              if (bfs(matrix, rowIdx, colIdx)) res.push([rowIdx, colIdx]);
          });
      });
      return res;
  };