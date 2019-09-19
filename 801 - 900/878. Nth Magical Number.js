// A positive integer is magical if it is divisible by either A or B.
// Return the N-th magical number.  Since the answer may be very large, return it modulo 10^9 + 7.

// Example 1:
// Input: N = 1, A = 2, B = 3
// Output: 2

// Example 2:
// Input: N = 4, A = 2, B = 3
// Output: 6

// Example 3:
// Input: N = 5, A = 2, B = 4
// Output: 10

// Example 4:
// Input: N = 3, A = 6, B = 4
// Output: 8
 
// Note:
// 1 <= N <= 10^9
// 2 <= A <= 40000
// 2 <= B <= 40000

/**
 * @param {number} N
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
const gcd = (a, b) => {
    while (b) {
       let t = b; 
       b = a % b; 
       a = t;
    }
    return a;
}

const mod = 1e9+7;

var nthMagicalNumber = (n, a, b) => {
    let repeatedValue = a * b / gcd(a, b);
    let repeatedCount = repeatedValue / a + repeatedValue / b - 1; 
    let remainingCount = n % repeatedCount;
    let remainingValue = Math.ceil(repeatedValue * (remainingCount / repeatedCount));
    remainingValue -= Math.min(remainingValue % a, remainingValue % b);
    let guessedCount = Math.floor(remainingValue / a) + Math.floor(remainingValue / b);
    if (guessedCount < remainingCount) {
        remainingValue += Math.min(a - remainingValue % a, b - remainingValue % b);
    }
    return (Math.floor(n / repeatedCount) * repeatedValue + remainingValue) % mod;
};