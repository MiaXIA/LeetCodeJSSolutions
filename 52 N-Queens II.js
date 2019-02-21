// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
// Given an integer n, return the number of distinct solutions to the n-queens puzzle.

//Example:
//Input: 4
//Output: 2
//Explanation: see 51 example solution

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = n => {
    var ans = 0;
    
    var check = (arr, i) => {
        return arr.every((q, idx) => {
            var onSameRow = q === i;
            var onSameDiagonal = Math.abs((q - i)/(idx - arr.length)) === 1;
            return !onSameRow && !onSameDiagonal;
        });
    }
    
    (function dfs(combinations) {
        for(var i = 0; i < n; i++) {
            if (check(combinations, i)) {
                if (combinations.length + 1 === n) {
                    ans += 1;
                    return;
                } else {
                    dfs([...combinations, i]);
                }
            }
        }
    })([]);
    
    return ans;
};

console.log(totalNQueens(4));