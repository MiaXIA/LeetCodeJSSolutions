// Given a non-empty 2D matrix matrix and an integer k, find the max sum of a rectangle in the matrix such that its sum is no larger than k.

// Example:
// Input: matrix = [[1,0,1],[0,-2,3]], k = 2
// Output: 2 
// Explanation: Because the sum of rectangle [[0, 1], [-2, 3]] is 2,
//              and 2 is the max number no larger than k (k = 2).

// Note:
// The rectangle inside the matrix must have an area > 0.
// What if the number of rows is much larger than the number of columns?

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = (matrix, k) => {
    const row = matrix.length, col = matrix[0].length;
    let res = -Infinity;
    for (let i = 0; i < col; i++) {
        let rowSum = Array(row).fill(0);
        for (let j = i; j < col; j++) {
            let sum = 0, max = -Infinity;
            for (let r = 0; r < row; r++) {
                rowSum[r] += matrix[r][j];
                if (sum < 0) sum = 0;
                sum += rowSum[r];
                max = Math.max(max, sum);
            }
            if (max <= k) res = Math.max(res, max);
            else {
                max = -Infinity;
                for (let m = 0; m < row; m++) {
                    sum = 0;
                    for (let n = m; n < row; n++) {
                        sum += rowSum[n];
                        if (sum <= k) max = Math.max(max, sum);
                    }
                }
                res = Math.max(res, max);
            }
            if (res === k) return k;
        }
    }
    return res;
};