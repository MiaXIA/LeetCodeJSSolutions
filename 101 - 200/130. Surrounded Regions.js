// Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.
// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// Example:
// X X X X
// X O O X
// X X O X
// X O X X
// After running your function, the board should be:
// X X X X
// X X X X
// X X X X
// X O X X
// Explanation:
// Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const feasible = (x, y, M) => {
    const w = M[0].length;
    const h = M.length;
    return x >= 0 && x < w && y >= 0 && y < h && M[y][x] === 'O';
}

const markBoundary = (M, x, y, visited) => {
    const q = [{ x, y}];
    visited[y][x] = true;
    
    while (q.length) {
        const curr = q.shift();
        
        const directions = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ];
        
        for (const [dx, dy] of directions) {
            const [nextX, nextY] = [curr.x + dx, curr.y + dy];
            
            if (feasible(nextX, nextY, M) && !visited[nextY][nextX]) {
                visited[nextY][nextX] = true;
                q.push({ x: nextX, y: nextY });
            }
        }
    }
}

var solve = (board) => {
    const h = board.length;
    if (!h) return;
    const visited = [...Array(board.length)].map(() => []);
    const w = board[0].length;
    
    for (let i = 0; i < h; i++) {
        if (board[i][0] === 'O' && !visited[i][0]) {
            markBoundary(board, 0, i, visited);
        }
        
        if (board[i][w - 1] === 'O' && !visited[i][w - 1]) {
            markBoundary(board, w - 1, i, visited);
        }
    }
    
    for (let i = 0; i < w; i++) {
        if (board[0][i] === 'O' && !visited[0][i]) {
            markBoundary(board, i , 0, visited);
        }
        
        if (board[h - 1][i] === 'O' && !visited[h - 1][i]) {
            markBoundary(board, i, h - 1, visited);
        }
    }
    
    for (let j = 0; j < h; j++) {
        for (let i = 0; i < w; i++) {
            if (board[j][i] === 'O' && !visited[j][i]) board[j][i] = 'X';
        }
    }
};