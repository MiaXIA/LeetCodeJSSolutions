// According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
// Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
// Any live cell with fewer than two live neighbors dies, as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population..
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

// Example:
// Input: 
// [
//   [0,1,0],
//   [0,0,1],
//   [1,1,1],
//   [0,0,0]
// ]
// Output: 
// [
//   [0,0,0],
//   [1,0,1],
//   [0,1,1],
//   [0,1,0]
// ]

// Follow up:
// Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
// In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = (board) => {
    var m = board.length;
    if (m === 0) return;
    
    var n = board[0].length;
    if (n === 0) return;
    
    const liveCount = (board, i, j) => {
        var count = 0;
        var l = j - 1;
        var t = i - 1;
        var r = j + 1;
        var b = i + 1;
        if (l >= 0 && l < n) {
            if (board[i][l] === 1 || board[i][l] === 3) count++;
            if (t >= 0 && t < m && (board[t][l] === 1 || board[t][l] === 3)) count++;
            if (b >= 0 && b < m && (board[b][l] === 1 || board[b][l] === 3)) count++;
        }
        if (r >= 0 && r < n) {
            if (board[i][r] === 1 || board[i][r] === 3) count++;
            if (t >= 0 && t < m && (board[t][r] === 1 || board[t][r] === 3)) count++;
            if (b >= 0 && b < m && (board[b][r] === 1 || board[b][r] === 3)) count++;
        }
        if (t >= 0 && t < m && (board[t][j] === 1 || board[t][j] === 3)) count++;
        if (b >= 0 && b < m && (board[b][j] === 1 || board[b][j] === 3)) count++;
        
        return count;
    };
    
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            var lCount = liveCount(board, i, j);
            if (board[i][j] === 1) {
                if (lCount < 2 || lCount > 3) board[i][j] = 3;
            } else if (board[i][j] === 0) {
                if (lCount === 3) board[i][j] = 2;
            }
        }
    }
    
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (board[i][j] === 2) board[i][j] = 1;
            else if (board[i][j] === 3) board[i][j] = 0;
        }
    }
};