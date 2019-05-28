// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

// Example 1:
// Input: 16
// Output: true

// Example 2:
// Input: 5
// Output: false
// Follow up: Could you solve it without loops/recursion?

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = (num) => {
    if (num <= 0) return false;
    while (num % 4 === 0) num /= 4;
    return num === 1;
};

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = (num) => {
    if (num <= 0) return false;
    const s = num.toString(2).slice(1);
    if (s.includes('1') || s.length % 2) return false;
    return true;
};
