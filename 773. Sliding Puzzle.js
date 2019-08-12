// On a 2x3 board, there are 5 tiles represented by the integers 1 through 5, and an empty square represented by 0.
// A move consists of choosing 0 and a 4-directionally adjacent number and swapping it.
// The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].
// Given a puzzle board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of the board to be solved, return -1.

// Examples:
// Input: board = [[1,2,3],[4,0,5]]
// Output: 1
// Explanation: Swap the 0 and the 5 in one move.
// Input: board = [[1,2,3],[5,4,0]]
// Output: -1
// Explanation: No number of moves will make the board solved.
// Input: board = [[4,1,2],[5,0,3]]
// Output: 5
// Explanation: 5 is the smallest number of moves that solves the board.
// An example path:
// After move 0: [[4,1,2],[5,0,3]]
// After move 1: [[4,1,2],[0,5,3]]
// After move 2: [[0,1,2],[4,5,3]]
// After move 3: [[1,0,2],[4,5,3]]
// After move 4: [[1,2,0],[4,5,3]]
// After move 5: [[1,2,3],[4,5,0]]
// Input: board = [[3,2,4],[1,5,0]]
// Output: 14

// Note:
// board will be a 2 x 3 array as described above.
// board[i][j] will be a permutation of [0, 1, 2, 3, 4, 5].

/**
 * @param {number[][]} board
 * @return {number}
 */
const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const isValid = (i, j, m, n) => {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}

const createKey = (board) => {
  return board.map((row) => row.join('')).join('');
}

const clone = (data) => {
  if (!Array.isArray(data)) {
    return data;
  }
  return data.map((row) => clone(row));
}

const swap = (board, x, y, i, j) => {
  [board[x][y], board[i][j]] = [board[i][j], board[x][y]];
  return board;
}

const isSolved = (board) => {
  const key = createKey(board);
  return key === '123450';
}

const findZero = (board, m, n) => {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

var slidingPuzzle = (board) => {
  const m = board.length;
  const n = board[0].length;
  const queue = [[board, 0, findZero(board, m, n)]];
  const visited = new Set();
  while (queue.length) {
    const [b, nSteps, [x, y]] = queue.shift();
    if (isSolved(b)) {
      return nSteps;
    }
    for (const [di, dj] of dirs) {
      const i = x + di;
      const j = y + dj;
      if (isValid(i, j, m, n)) {
        const nextBoard = swap(clone(b), x, y, i, j);
        const key = createKey(nextBoard);
        if (!visited.has(key)) {
          visited.add(key);
          queue.push([nextBoard, nSteps + 1, [i, j]]);
        }
      }
    }
  }
  return -1;
};