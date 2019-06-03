// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:
// s = "leetcode"
// return 0.
// s = "loveleetcode",
// return 2.

// Note: You may assume the string contain only lowercase letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = (s) => {
    s = s.split('');
    const r = s.filter((v, i, arr) => arr.indexOf(v) !== i);
    for (let i = 0; i < s.length; i++) {
        if (!r.includes(s[i])) return i;
    }
    return -1;
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = (s) => {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] || 0;
        map[s[i]]++;
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] in map && map[s[i]] === 1) return i;
    }
    return -1;
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = (s) => {
    const map = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        map[s.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s.charCodeAt(i) - 97] === 1) return i;
    }
    return -1;
};