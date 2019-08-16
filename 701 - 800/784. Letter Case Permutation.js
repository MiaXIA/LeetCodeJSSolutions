// Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

// Examples:
// Input: S = "a1b2"
// Output: ["a1b2", "a1B2", "A1b2", "A1B2"]
// Input: S = "3z4"
// Output: ["3z4", "3Z4"]
// Input: S = "12345"
// Output: ["12345"]

// Note:
// S will be a string with length between 1 and 12.
// S will consist only of letters or digits.

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = (S) => {
    let res = [], str = '';
    const DFS = (n, str) => {
        if (n === S.length) {
            res.push(str);
            return;
        }
        if (parseInt(S[n]) >= 0) {
            str += S[n];
            DFS(n + 1, str);
            str = str.slice(0, str.length - 1);
        } else {
            str += S[n].toLowerCase();
            DFS(n + 1, str);
            str = str.slice(0, str.length - 1);
            str += S[n].toUpperCase();
            DFS(n + 1, str);
            str = str.slice(0, str.length - 1);
        }
    }
    DFS(0, str);
    return res;
};