// Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

// Example:
// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output:  [1,2,4,7,5,3,6,8,9]
// Explanation:

// Note:
// The total number of elements of the given matrix will not exceed 10,000.

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = (matrix) => {
    if (matrix.length === 0) return [];
    let m = matrix.length, n = matrix[0].length;
    let res = [];
    
    const searchUp = (row, col) => {
        res.push(matrix[row][col]);
        if (res.length === m * n) return res;
        if (row === 0) col < n - 1 ? searchDown(row, col + 1) : searchDown(row + 1, col);
        else col === n - 1 ? searchDown(row + 1, col) : searchUp(row - 1, col + 1);
    }
    
    const searchDown = (row, col) => {
        res.push(matrix[row][col]);
        if (res.length === m * n) return res;
        if (col === 0) row < m - 1 ? searchUp(row + 1, col) : searchUp(row, col + 1);
        else row === m - 1 ? searchUp(row, col + 1) : searchDown(row + 1, col - 1);
    }
    
    searchUp(0, 0);
    return res;
};