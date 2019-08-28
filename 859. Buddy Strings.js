// Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.

// Example 1:
// Input: A = "ab", B = "ba"
// Output: true

// Example 2:
// Input: A = "ab", B = "ab"
// Output: false

// Example 3:
// Input: A = "aa", B = "aa"
// Output: true

// Example 4:
// Input: A = "aaaaaaabc", B = "aaaaaaacb"
// Output: true

// Example 5:
// Input: A = "", B = "aa"
// Output: false
 
// Note:
// 0 <= A.length <= 20000
// 0 <= B.length <= 20000
// A and B consist only of lowercase letters.

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = (A, B) => {
    if (A.length != B.length) {
        return false;
    }
    
    if (A == B) {
        let s = new Set();
        for (let i = 0; i < A.length; i++) {
            s.add(A.charAt(i));
        }
        return s.size < A.length;
    }
    
    let diff = [];
    for (let i = 0; i < A.length; i++) {
        if (A.charAt(i) != B.charAt(i)) {
            diff.push(i);
        }
    }
    
    return diff.length == 2 && A.charAt(diff[0]) == B.charAt(diff[1]) && A.charAt(diff[1]) == B.charAt(diff[0]);
};