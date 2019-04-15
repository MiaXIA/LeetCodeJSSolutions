// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// 1. Each row must contain the digits 1-9 without repetition.
// 2. Each column must contain the digits 1-9 without repetition.
// 3. Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

//Example
//Input:
// [
//     ["5","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]
//   ]
//Output: true

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = board => {
    const boxes = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const cols = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const rows = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            const digit = board[i][j];
            
            if(digit !== '.') {
                //k is the index of box
                const k = Math.floor(j / 3) + (Math.floor(i / 3) * 3);
                if(boxes[k][digit] || cols[j][digit] || rows[i][digit]) return false;
                boxes[k][digit] = cols[j][digit] = rows[i][digit] = true;
            }
        }
    }
    return true;
};