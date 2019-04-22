// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:
// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.

// Example 1:
// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Example 2:
// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.

// Example 3:
// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const helper = (s, map, set) => {
    if (map.has(s)) return map.get(s);
    if (set.has(s)) {
        map.set(s, true);
        return true;
    }
    
    for (let i = 1; i < s.length; i++) {
        let left = s.substring(0, i);
        let right = s.substring(i);
        if (helper(left, map, set) && set.has(right)) {
            map.set(s, true);
            return true;
        }
    }
    map.set(s, false);
    return false;
}
var wordBreak = (s, wordDict) => {
    let set = new Set(wordDict);
    let map = new Map();
    return helper(s, map, set);
};
