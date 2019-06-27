// We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.
// Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.

// Example:
// Input: 28
// Output: True
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// Note: The input number n will not exceed 100,000,000. (1e8)

/**
 * @param {number} num
 * @return {boolean}
 */
const getDivisors = (num) => {
    const res = {};
    for (let i = 1, max = ~~Math.sqrt(num); i <= max; i++) {
        let another = ~~(num / i);
        if (i * another === num) {
            res[i] = 1;
            res[another] = 1;
        }
    }
    return Object.keys(res);
};

var checkPerfectNumber = (num) => {
    if (num <= 0) return false;
    return getDivisors(num).filter((a) => num != a).reduce((a, b) => parseInt(a)+parseInt(b), 0) === num;
};