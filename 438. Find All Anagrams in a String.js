// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.

// Example 1:

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input:
// s: "abab" p: "ab"

// Output:
// [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = (s, p) => {
    const map = new Array(26);
    map.fill(0);
    for (let i = 0; i < p.length; i++) map[p[i].charCodeAt() - 97]++;
    
    let j = 0;
    const r = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i].charCodeAt() - 97;
        map[c]--;
        while (map[c] < 0) {
            const c2 = s[j++].charCodeAt() - 97;
            map[c2]++;
        }
        if (i - j + 1 === p.length) r.push(j);
    }
    return r;
};