// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = (s, t) => {
    if (s === t) return true;
    if (s.length !== t.length) return false;
    let missing = s.length;
    let counts = {};
    
    for (let i = 0; i < missing; i++) counts[s[i]] = counts[s[i]] ? counts[s[i]] + 1 : 1;
    for (let i = 0; i < t.length; i++) {
        if (t[i] in counts) {
            if (counts[t[i]] -- > 0) missing--;
        }
    }
    
    return missing === 0;
};