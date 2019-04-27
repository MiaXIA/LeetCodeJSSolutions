// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:
//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
//     ...

// Example 1:
// Input: "A"
// Output: 1

// Example 2:
// Input: "AB"
// Output: 28

// Example 3:
// Input: "ZY"
// Output: 701

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = (s) => {
    let r = 0;
    for (let i = s.length - 1; i >= 0; i--) r += (26 ** (s.length - i - 1) * (s[i].charCodeAt(0) - 65 + 1));
    return r;
};

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = (s) => {
    let r = 0;
    for (let i = 0; i < s.length; i++) r = r * 26 + (s[i].charCodeAt(0) - 65 + 1);
    return r;
};