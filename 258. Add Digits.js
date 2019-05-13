// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// Example:
// Input: 38
// Output: 2 
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
//              Since 2 has only one digit, return it.

// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = (num) => {
    let sum = 0;
    `${num}`.split('').forEach(ele => {
        sum += +ele;
        sum = sum >= 10 ? (sum % 10 + 1) : sum;
    });
    return sum;
};