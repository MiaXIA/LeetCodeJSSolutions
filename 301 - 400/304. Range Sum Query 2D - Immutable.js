// Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
// Range Sum Query 2D
// 3 0 1 4 2
// 5 6 3 2 1
// 1 2 0 1 5
// 4 1 0 1 7
// 1 0 3 0 5
// The above rectangle (with the red border) is defined by (row1, col1) = (2, 1) and (row2, col2) = (4, 3), which contains sum = 8.

// Example:
// Given matrix = [
//   [3, 0, 1, 4, 2],
//   [5, 6, 3, 2, 1],
//   [1, 2, 0, 1, 5],
//   [4, 1, 0, 1, 7],
//   [1, 0, 3, 0, 5]
// ]
// sumRegion(2, 1, 4, 3) -> 8
// sumRegion(1, 1, 2, 2) -> 11
// sumRegion(1, 2, 2, 4) -> 12
// Note:
// You may assume that the matrix does not change.
// There are many calls to sumRegion function.
// You may assume that row1 ≤ row2 and col1 ≤ col2.

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix;
    
    for (let row = 0; row < matrix.length; row++) {
        let sumRow = 0;
        
        for (let col = 0; col < matrix[0].length; col++) {
            sumRow += matrix[row][col];
            matrix[row][col] = sumRow + this.getValue(row - 1, col);
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    const a = this.matrix[row2][col2];
    const b = this.getValue(row1 - 1, col2);
    const c = this.getValue(row2, col1 - 1);
    const d = this.getValue(row1 - 1, col1 - 1);
    
    return a - b - (c - d);
};

NumMatrix.prototype.getValue = function(row, col) {
    return this.matrix[row] && this.matrix[row][col] || 0;
}

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */