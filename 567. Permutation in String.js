// Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

// Example 1:
// Input: s1 = "ab" s2 = "eidbaooo"
// Output: True
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:
// Input:s1= "ab" s2 = "eidboaoo"
// Output: False
// Note:
// The input strings only contain lower case letters.
// The length of both given strings is in range [1, 10,000].

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
Map.prototype.getOrDefault = function(key, value) {
    return this.has(key) ? this.get(key) : value;
}

var checkInclusion = (s1, s2) => {
    if (!s1 || !s2 || s1.length > s2.length) return false;
    let map = new Map();
    for (let s of s1) map.set(s, map.getOrDefault(s, 0) + 1);
    let start = 0, end = 0, counter = map.size;
    while (end < s2.length) {
        if (map.has(s2[end])) {
            map.set(s2[end], map.get(s2[end]) - 1);
            if (map.get(s2[end]) === 0) counter--;
        }
        end++;
        
        while (counter === 0) {
            if (map.has(s2[start])) {
                map.set(s2[start], map.get(s2[start]) + 1);
                if (map.get(s2[start]) > 0) counter++;
            }
            if (end - start === s1.length) return true;
            start++;
        }
    }
    return false;
};