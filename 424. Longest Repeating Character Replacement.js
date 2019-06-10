// Given a string that consists of only uppercase English letters, you can replace any letter in the string with another letter at most k times. Find the length of a longest substring containing all repeating letters you can get after performing the above operations.
// Note:
// Both the string's length and k will not exceed 104.

// Example 1:
// Input:
// s = "ABAB", k = 2
// Output:
// 4
// Explanation:
// Replace the two 'A's with two 'B's or vice versa.

// Example 2:
// Input:
// s = "AABABBA", k = 1
// Output:
// 4
// Explanation:
// Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = (s, k) => {
    let character = new Array(26).fill(0);
    let start = 0;
    let maxLength = 0;
    let maxCount = 0;
    
    for (let i = 0; i < s.length; i++) {
        character[s.charCodeAt(i) - 'A'.charCodeAt(0)]++;
        maxCount = Math.max(maxCount, character[s.charCodeAt(i) - 'A'.charCodeAt(0)]);
        while (i - start + 1 - maxCount > k) {
            maxCount = Math.max(maxCount, --character[s.charCodeAt(start) - 'A'.charCodeAt(0)]);
            start++;
        }
        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength;
};