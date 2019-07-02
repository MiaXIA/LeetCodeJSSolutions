// Given two words word1 and word2, find the minimum number of steps required to make word1 and word2 the same, where in each step you can delete one character in either string.

// Example 1:
// Input: "sea", "eat"
// Output: 2
// Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
// Note:
// The length of given words won't exceed 500.
// Characters in given words can only be lower-case letters.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = (word1, word2) => {
    if (word1 === word2) return 0;
    const [long, short] = word1.length >= word2.length 
        ? [word1, word2] : [word2, word1];
    const matrix = Array(long.length + 1).fill(null).map(el => Array(short.length + 1).fill(null));
    matrix.forEach(row => row[0] = 0);
    matrix[0] = matrix[0].map(el => 0);
    
    const fillInRow = (rowIdx) => {
        for (let colIdx = 1; colIdx < matrix[rowIdx].length; colIdx++) fillInSq(rowIdx, colIdx);
    };

    const fillInSq = (rowIdx, colIdx) => {
        if (long[rowIdx - 1] === short[colIdx - 1]) matrix[rowIdx][colIdx] = 1 + matrix[rowIdx - 1][colIdx - 1];
        else matrix[rowIdx][colIdx] = Math.max(matrix[rowIdx - 1][colIdx], matrix[rowIdx][colIdx - 1]);
    }

    for (let rowIdx = 1; rowIdx <= long.length; rowIdx++) fillInRow(rowIdx);
    return (long.length + short.length) - (2 * matrix[long.length][short.length]);
};