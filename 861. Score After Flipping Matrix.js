// We have a two dimensional matrix A where each value is 0 or 1.
// A move consists of choosing any row or column, and toggling each value in that row or column: changing all 0s to 1s, and all 1s to 0s.
// After making any number of moves, every row of this matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.
// Return the highest possible score.

// Example 1:
// Input: [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
// Output: 39
// Explanation:
// Toggled to [[1,1,1,1],[1,0,0,1],[1,1,1,1]].
// 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
 
// Note:
// 1 <= A.length <= 20
// 1 <= A[0].length <= 20
// A[i][j] is 0 or 1.

/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = A => {
    for (let i = 0; i < A.length; i++) {
          if (A[i][0] === 0) {
          for (let j = 0; j < A[i].length; j++) {
            A[i][j] = A[i][j] === 0 ? 1 : 0;
        }
      }
    }
    
    for (let i = 1; i < A[0].length; i++) {
        let counter = 0;
      for (let j = 0; j < A.length; j++) {
        counter += A[j][i];
      }   
        if (A.length - counter > counter) {
          for (let j = 0; j < A.length; j++) {
            A[j][i] = A[j][i] === 0 ? 1 : 0;
        }    
      }
    }
    
    return A.reduce((acc, curr) => {
          let count = 0;
      curr.forEach((v, i) => {
          count += (v * Math.pow(2, curr.length - i - 1));
      })
        return acc + count;
    }, 0);
  };