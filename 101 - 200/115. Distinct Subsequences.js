// Given a string S and a string T, count the number of distinct subsequences of S which equals T.
// A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

// Example 1:
// Input: S = "rabbbit", T = "rabbit"
// Output: 3
// Explanation:
// As shown below, there are 3 ways you can generate "rabbit" from S.
// (The caret symbol ^ means the chosen letters)
// rabbbit
// ^^^^ ^^
// rabbbit
// ^^ ^^^^
// rabbbit
// ^^^ ^^^

// Example 2:
// Input: S = "babgbag", T = "bag"
// Output: 5
// Explanation:
// As shown below, there are 5 ways you can generate "bag" from S.
// (The caret symbol ^ means the chosen letters)
// babgbag
// ^^ ^
// babgbag
// ^^    ^
// babgbag
// ^    ^^
// babgbag
//   ^  ^^
// babgbag

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = (s, t) => {
    const d = new Array(s.length + 1).fill().map(_ => new Array(t.length + 1).fill(0));
    
    for (let i = 0; i <= s.length; i++) {
        for (let j = 0; j <= t.length; j++) {
            if (i === 0 && j == 0) {
                d[i][j] = 1;
            } else if (i === 0) {
                d[i][j] = 0;
            } else if (j === 0) {
                d[i][j] = 1;
            } else {
                d[i][j] = d[i - 1][j];
                if (s[i - 1] === t[j - 1]) {
                    d[i][j] += d[i - 1][j - 1];
                }
            }
        }
    }
    return d[s.length][t.length];

};