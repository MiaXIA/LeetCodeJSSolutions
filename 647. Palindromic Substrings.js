// Given a string, your task is to count how many palindromic substrings in this string.
// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:
// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
 
// Example 2:
// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 
// Note:
// The input string length won't exceed 1000.

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = (s) => {
    const len = s.length;
    let count = 0; 
    if (!len) return count;
    
    const expand = (start, end) => {
      while (start >= 0 && end < len) {
        if (s[start] === s[end]) {
          count++;
          start--;
          end++;
        } else {
          return;
        }
      }
    };
    
    for (let i = 0; i < len; i++) {
      expand(i, i);
      expand(i, i + 1);
    }
    
    return count;
  };