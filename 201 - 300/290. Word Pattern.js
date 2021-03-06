// Given a pattern and a string str, find if str follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

// Example 1:
// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true

// Example 2:
// Input:pattern = "abba", str = "dog cat cat fish"
// Output: false

// Example 3:
// Input: pattern = "aaaa", str = "dog cat cat dog"
// Output: false

// Example 4:
// Input: pattern = "abba", str = "dog dog dog dog"
// Output: false

// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = (pattern, str) => {
    str = str.split(' ');
    if (pattern.length !== str.length) return false;
    const map1 = {};
    const map2 = {};
    for (let i = 0; i < pattern.length; i++) {
        const v1 = pattern[i];
        const v2 = str[i];
        if (v1 in map1 && map1[v1] !== v2) return false;
        if (v2 in map2 && map2[v2] !== v1) return false;
        map1[v1] = v2;
        map2[v2] = v1;
    }
    return true;
};