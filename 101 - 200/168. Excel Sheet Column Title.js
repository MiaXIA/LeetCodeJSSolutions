// Given a positive integer, return its corresponding column title as appear in an Excel sheet.

// For example:
//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB 
//     ...

// Example 1:
// Input: 1
// Output: "A"

// Example 2:
// Input: 28
// Output: "AB"

// Example 3:
// Input: 701
// Output: "ZY"

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = (n) => {
    if (n <= 0) return "";
    var character_offset = 64;
    var columnTitle = "";
    while (n > 0) {
        var remainder = n % 26 == 0 ? 26 : n % 26;
        n = (n - remainder) / 26;
        columnTitle = String.fromCharCode(character_offset + remainder) + columnTitle;
    }
    return columnTitle;
};