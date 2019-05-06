// Given a string s, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.

// Example 1:
// Input: "aacecaaa"
// Output: "aaacecaaa"

// Example 2:
// Input: "abcd"
// Output: "dcbabcd"

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = (s) => {
    let s0 = s;
    let s1 = s.split('').reverse().join('');
    let index = 0;
    for (let i = 0; i < s0.length; i++) {
        cut0 = s0.substr(0, s0.length - i);
        cut1 = s1.substr(i, s1.length - i);
        index = i;
        if (cut0 === cut1) break;
    }
    return s1.substr(0, index) + s0;
};

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = (s) => {
    let maxPalindrome = 0;
     let n = s.length, maxN = Math.floor(n / 2) + 1, l = 0, r = -1, d = new Array(maxN);
     
     for (let i = 0; i < maxN; i++) {
         let k = i > r ? 1 : Math.min(d[l + r - i], r - i);
         while (0 <= i - k && i + k < n && s[i - k] === s[i + k]) k++;
         if (i - k + 1 === 0 && k * 2 - 1 > maxPalindrome) maxPalindrome = k * 2 - 1;
         d[i] = k;
         if (i + k - 1 > r) {
             r = i + k - 1;
             l = i - k + 1;
         }
     }
     l = 0;
     r = -1;
     for (let i = 0; i < maxN; i++) {
         let k = i > r ? 0 : Math.min(d[l + r - i + 1], r - i + 1);
         while (i + k < n && i - k - 1 >= 0 && s[i + k] === s[i - k - 1]) k++;
         if (i - k === 0 && k * 2 > maxPalindrome) maxPalindrome = k * 2;
         d[i] = k;
         if (i + k - 1 > r) {
             l = i - k;
             r = i + k - 1;
         }
     }
     if (maxPalindrome === s.length) return s;
     
     let res = '';
     for (let i = s.length - 1; i >= maxPalindrome; i--) res += s[i];
     return res + s;
 };