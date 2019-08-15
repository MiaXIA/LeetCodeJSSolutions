// A Tic-Tac-Toe board is given as a string array board. Return True if and only if it is possible to reach this board position during the course of a valid tic-tac-toe game.
// The board is a 3 x 3 array, and consists of characters " ", "X", and "O".  The " " character represents an empty square.
// Here are the rules of Tic-Tac-Toe:
// Players take turns placing characters into empty squares (" ").
// The first player always places "X" characters, while the second player always places "O" characters.
// "X" and "O" characters are always placed into empty squares, never filled ones.
// The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
// The game also ends if all squares are non-empty.
// No more moves can be played if the game is over.

// Example 1:
// Input: board = ["O  ", "   ", "   "]
// Output: false
// Explanation: The first player always plays "X".

// Example 2:
// Input: board = ["XOX", " X ", "   "]
// Output: false
// Explanation: Players take turns making moves.

// Example 3:
// Input: board = ["XXX", "   ", "OOO"]
// Output: false

// Example 4:
// Input: board = ["XOX", "O O", "XOX"]
// Output: true

// Note:
// board is a length-3 array of strings, where each string board[i] has length 3.
// Each board[i][j] is a character in the set {" ", "X", "O"}.

/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = (board) => {
    var nu = 0, row = [0,0,0], col = [0,0,0], 
        dia = 0, autiDia = 0, 
        xwin = false, owin = false;
    for (var i = 0; i < 3; i++){
        for (var j = 0; j < 3; j++){
                var add= board[i].charAt(j) == "X" ? 1 : board[i].charAt(j) == "O" ? -1 : 0
                nu += add;
                row[i] += add;
                col[j] += add;
                if (i == j){
                    dia += add;
                }
                if (i + j == 2){
                   autiDia += add;
                }
        }
    }
    if (nu < 0 || Math.abs(nu) > 1) return false;
    xwin = (row[0] == 3 || row[1] == 3 || row[2] == 3 || col[0] == 3
 || col[1] == 3  || col[2] == 3 || dia == 3 || autiDia == 3);   
    
    owin = (row[0] == -3 || row[1] == -3 || row[2] == -3 || col[0] == -3
 || col[1] == -3  || col[2] == -3 || dia== -3 || autiDia == -3);  
    if (xwin && owin) return false;
    if (xwin && nu > 0) return true;
    if (owin && nu == 0) return true;
    if (!xwin && !owin) return true;
    return false;
};