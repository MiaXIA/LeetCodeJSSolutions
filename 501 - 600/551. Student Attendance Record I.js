// You are given a string representing an attendance record for a student. The record only contains the following three characters:
// 'A' : Absent.
// 'L' : Late.
// 'P' : Present.
// A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).
// You need to return whether the student could be rewarded according to his attendance record.

// Example 1:
// Input: "PPALLP"
// Output: True
// Example 2:
// Input: "PPALLL"
// Output: False

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = (s) => {
    let n = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A' && ++n > 1) return false;
        if (s[i] === 'L' && s[i + 1] === 'L' && s[i + 2] === 'L') return false;
    }
    
    return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = (s) => {
    let i = -1, n = 0, m = 0;
    
    while (i++ < s.length) {
        if (s[i] === 'A') n++;
        if (s[i] === 'L' && s[i + 1] === 'L' && s[i + 2] === 'L') m++;
        if (n > 1 || m >= 1) return false;
    }
    
    return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = (s) => {
    let map = new Map();
    
    for (let c of s) map.set(c, map.getOrDefault(c, 0) + 1);
    let n = map.get('A') === undefined ? 0 : map.get('A');
    return n <= 1 && !s.includes('LLL');
};

Map.prototype.getOrDefault = function(key, value) {
    return this.has(key) ? this.get(key) : value;
}

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = (s) => {
    return (s.match(/A/g) || []).length <= 1 && !s.includes('LLL');
};