// Write a program to solve a Sudoku puzzle by filling the empty cells.
// A sudoku solution must satisfy all of the following rules:
// 1. Each of the digits 1-9 must occur exactly once in each row.
// 2. Each of the digits 1-9 must occur exactly once in each column.
// 3. Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// Empty cells are indicated by the character '.'.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = board => {
    let [rows, cols, triples, visit] = [{}, {}, {}, []];
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let t = [Math.floor(r / 3), Math.floor(c / 3)];
            rows[r] = rows[r] || new Set();
            cols[c] = cols[c] || new Set();
            triples[t] = triples[t] || new Set();
            if (board[r][c] != ".") {
                rows[r].add(board[r][c]);
                cols[c].add(board[r][c]);
                triples[t].add(board[r][c]);
            } else{
                visit.push([r, c]);
            }
        }
    }
    
    var dfs = () => {
       if (visit[0] == undefined) {
           return true;
       }
        let [r, c] = visit[0];
        let t = [Math.floor(r / 3), Math.floor(c / 3)];
        for (let dig = 1; dig < 10; dig++) {
            dig = String(dig);
            if (!(rows[r].has(dig)) && !(cols[c].has(dig)) && !(triples[t].has(dig))) {
                board[r][c] = dig;
                rows[r].add(dig);
                cols[c].add(dig);
                triples[t].add(dig);
                visit.shift();
                if (dfs()) {
                    return true;
                }
                else {
                    board[r][c] = ".";
                    rows[r].delete(dig);
                    cols[c].delete(dig);
                    triples[t].delete(dig);
                    visit.unshift([r, c]);
                }
            }
        }
        return false;
    }
    dfs();
};