// Given a string which contains only lowercase letters, remove duplicate letters so that every letter appear once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

// Example 1:
// Input: "bcabc"
// Output: "abc"

// Example 2:
// Input: "cbacdcbc"
// Output: "acdb"

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = (s) => {
    if (!s) return "";
    var ch = Array.from(new Set(s)).map(ch => [100 - new Set(s.slice(s.indexOf(ch))).size, ch]).sort()[0][1];
    return ch + removeDuplicateLetters(s.slice(s.indexOf(ch)).split(ch).join(''));
};