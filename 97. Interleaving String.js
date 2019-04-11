// Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

// Example 1:
// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// Output: true

// Example 2:
// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// Output: false

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = (s1, s2, s3) => {
    if (s1.length + s2.length !== s3.length) return false;
    
    const N1 = s1.length;
    const N2 = s2.length;
    const DP = [...Array(N1 + 1)].map(e => Array(N2 + 1).fill(false));
    
    for (let i = 0; i <= N1; i++) {
        for (let j = 0; j <= N2; j++) {
            if (i === 0 && j === 0) {
                DP[i][j] = true;
            } else if (i === 0) {
                DP[i][j] = DP[i][j - 1] && s2[j - 1] === s3[i + j - 1];
            } else if (j === 0) {
                DP[i][j] = DP[i - 1][j] && s1[i - 1] === s3[i + j - 1];
            } else {
                DP[i][j] = (DP[i][j - 1] && s3[i + j - 1] === s2[j - 1]) || (DP[i - 1][j] && s3[i + j - 1] === s1[i - 1]);
            }
        }
    }
    return DP[N1][N2];
};