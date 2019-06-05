// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.
// This is case sensitive, for example "Aa" is not considered a palindrome here.

// Note:
// Assume the length of given string will not exceed 1,010.

// Example:
// Input:
// "abccccdd"
// Output:
// 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = (s) => {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] || 0;
        map[s[i]]++;
    }
    
    const counts = Object.values(map);
    const even = counts.filter(c => c % 2 === 0);
    const odd = counts.filter(c => c % 2 && c > 2).map(c => c - 1);
    let sum = 0;
    if (even.length > 0) sum += even.reduce((a, b) => a + b, 0);
    if (odd.length > 0) sum += odd.reduce((a, b) => a + b, 0);
    if (counts.filter(c => c % 2).length > 0) sum += 1;
    return sum;
};

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = (s) => {
    const map = {};
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            map[s[i]] = 0;
            count += 2;
        } else map[s[i]] = 1;
    }
    
    if (count < s.length) count += 1;
    
    return count;
};