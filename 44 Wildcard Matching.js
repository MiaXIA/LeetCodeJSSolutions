// Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.
// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).
// Note:
// s could be empty and contains only lowercase letters a-z.
// p could be empty and contains only lowercase letters a-z, and characters like ? or *.

//Example
//Input: s = 'aa', p = 'a'
//Output: false
//Explanation: 'a' does not match the entire string 'aa'

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = (s, p) => {
    const sLen = s.length;
    const pLen = p.length;
    const dp = new Array(sLen + 1).fill(0).map(x => new Array(pLen + 1).fill(0));
    
    dp[0][0] = true;
    
    for(let i = 1; i <= pLen; i++) {
        if(p[i - 1] === '*') dp[0][i] = dp[0][i - 1];
    }
    for(let i = 1; i <= sLen; i++) {
        for(let j = 1; j <= pLen; j++) {
            if (s[i - 1] === p[j - 1] || p[j - 1] === '?') dp[i][j] = dp[i - 1][j - 1];
            else if(p[j - 1] === '*') dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
        }
    }
    return !!dp[sLen][pLen];
};