// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

// Example:
// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"

// Note:
// If there is no such window in S that covers all characters in T, return the empty string "".
// If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = (s, t) => {
    var ans = '';
    
    var map = {};
    t.split('').forEach(ch => map[ch] = (map[ch] || 0) + 1);
    var count = Object.keys(map).length;
    
    var l = 0;
    var r = -1;
    
    while (r < s.length) {
        if (count === 0) {
            if (!ans || r - l + 1 < ans.length) ans = s.slice(l, r + 1);
            if (map[s[l]] !== undefined) map[s[l]]++;
            if (map[s[l]] > 0) count++;
            l++;
        } else {
            r++;
            if (map[s[r]] !== undefined) map[s[r]]--;
            if (map[s[r]] === 0) count--;
        }
    }
    return ans;
};