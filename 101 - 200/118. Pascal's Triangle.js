// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:
// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = (numRows) => {
    if (numRows === 0) return [];
    let row = 1, res = [[1]];
    while (res.length < numRows) {
        let level = [1], i = 0;
        while (++i < row) level.push(res[row - 1][i - 1] + res[row - 1][i]);
        res[row++] = [...level, 1];
    }
    return res;
};