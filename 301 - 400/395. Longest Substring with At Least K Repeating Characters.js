// Find the length of the longest substring T of a given string (consists of lowercase letters only) such that every character in T appears no less than k times.

// Example 1:
// Input:
// s = "aaabb", k = 3
// Output:
// 3
// The longest substring is "aaa", as 'a' is repeated 3 times.

// Example 2:
// Input:
// s = "ababbc", k = 2
// Output:
// 5
// The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = (s, k) => {
    let obj = {};
    let res = 0;
    let delimiter = '';
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === undefined) obj[s[i]] = 1;
        else obj[s[i]]++;
    }
    for (let key in obj) {
        if (obj[key] < k) {
            delimiter = key;
            let array = s.split(delimiter);
            for (let i = 0; i < array.length; i++) res = Math.max(res, longestSubstring(array[i], k));
            return res;
        }
    }
    if (delimiter === '') return s.length;
};