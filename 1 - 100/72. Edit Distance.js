// Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.
// You have the following 3 operations permitted on a word:
// Insert a character
// Delete a character
// Replace a character

// Example 1:
// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')

// Example 2:
// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation: 
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = (word1, word2) => {
    word1 = word1.split(''),word2=word2.split('');
    var m = word1.length, n = word2.length;
    var dp = [];
    for (var i = 0; i <= m; i++) {
        dp[i] = new Array(n);
    }   
    for (var i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    for (var j = 0; j <= n; j++) {
        dp[0][j] = j;
    }
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1] + 1, dp[i - 1][j] + 1, dp[i][j - 1] + 1);
            }
        }
    }
    return dp[m][n];
};