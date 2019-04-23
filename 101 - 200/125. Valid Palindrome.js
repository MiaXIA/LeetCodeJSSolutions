// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:
// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:
// Input: "race a car"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = (s) => {
    s = s.toLowerCase().split('');
    const w = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
    s = s.filter(_s => w.includes(_s));
    let c = Object.assign([], s);
    c.reverse();
    return c.join('') === s.join('');
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = (s) => {
    s = s.toLowerCase();
    const w = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let left = 0;
    let right = s.length - 1;
    while (left <= right) {
        if (!w.includes(s[left])) {
            left ++;
            continue;
        }
        if (!w.includes(s[right])) {
            right--;
            continue;
        }
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
};