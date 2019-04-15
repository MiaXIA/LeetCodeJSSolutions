// Given a 2D board and a word, find if the word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example:
// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]
// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = (board, word) => {
  if (!board || !board[0]) return false;
  if (!word) return false;
  const m = board.length;
  const n = board[0].length;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  let r = false;
  
  const dfs = (i, j, curWord) => {
    curWord += board[i][j];
    if (curWord.length > word.length || r) return;
    if (curWord === word) r = true;
    
    const tmp = board[i][j];
    board[i][j] = '@';
    for (let k = 0; k < 4; k++) {
      const x = i + dx[k];
      const y = j + dy[k];
      if (0 <= x && x < m && 0 <= y && y < n && board[x][y] !== '@' && board[x][y] === word[curWord.length]) {
        dfs(x, y, curWord);
      }
    }
    board[i][j] = tmp;
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        dfs(i, j, '');
      }
    }
  }
  
  return r;
};
