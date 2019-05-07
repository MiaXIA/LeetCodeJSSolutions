// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Example:
// Input: 
// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0
// Output: 4

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = (matrix) => {
    if (!matrix || !matrix[0]) return 0;
    
    let m = matrix.length;
    let n = m > 0 ? matrix[0].length : 0;
    let max_side = 0;
    for (let val in matrix[0]) max_side = +matrix[0][val] > max_side ? +matrix[0][val] : max_side;
    for (let i = 0; i < m; i++) max_side = +matrix[i][0] > max_side ? +matrix[i][0] : max_side;
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (+matrix[i][j] === 1) {
                matrix[i][j] = Math.min(Math.min(
                    +matrix[i - 1][j], +matrix[i][j - 1]
                ), +matrix[i - 1][j - 1]) + 1;
                if (+matrix[i][j] > max_side) max_side = +matrix[i][j];
            }
        }
    }
    return max_side * max_side;
};