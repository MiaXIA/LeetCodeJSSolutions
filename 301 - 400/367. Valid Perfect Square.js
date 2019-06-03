// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

// Example 1:
// Input: 16
// Output: true

// Example 2:
// Input: 14
// Output: false

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = (num) => {
    var sum = 0;
    for (let i = 1; i <= num; i += 2) {
        sum += i;
        if (sum === num) return true;
    }
    return false;
};