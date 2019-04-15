// Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

//Example
//Input: 3
//Output:
// [
//     [ 1, 2, 3 ],
//     [ 8, 9, 4 ],
//     [ 7, 6, 5 ]
//    ]

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = (n) => {
    let square = Array(n).fill(0).map(el => Array(n).fill(0));
    let count, row, col;
    count = row = col = 0;
    while (count < n * n) {
        while (square[row][col] === 0) {
            square[row][col++] = ++count;
        }
        col--;
        row++;
        while (square[row] && square[row][col] === 0) {
            square[row++][col] = ++count;
        }
        row--;
        col--;
        while (square[row][col] === 0) {
            square[row][col--] = ++count;
        }
        col++;
        row--;
        while (square[row] && square[row][col] === 0) {
            square[row--][col] = ++count;
        }
        row++;
        col++;
    }
    return square;
};