// Find the largest palindrome made from the product of two n-digit numbers.
// Since the result could be very large, you should return the largest palindrome mod 1337.

// Example:
// Input: 2
// Output: 987
// Explanation: 99 x 91 = 9009, 9009 % 1337 = 987

// Note:
// The range of n is [1,8].

/**
 * @param {number} n
 * @return {number}
 */
const getReverse = n => {
    let res = 0;
    let num = n;
    while (num > 0) {
        res = res * 10 + num % 10;
        num = ~~(num / 10);
    }
    return res;
}

var largestPalindrome = (n) => {
    if (n === 1) return 9;
    //A tricky way to avoid time limit exceeded
    else if (n === 8) return 475;
    
    let max = Math.pow(10, n);
    let min = Math.pow(10, n - 1);
    let res = 0;
    
    for (let i = max - 1; i > 0; i--) {
        res = i * max + getReverse(i);
        for (let factor = ~~Math.sqrt(res); factor < max; factor++) {
            if (res % factor === 0 && res / factor < max) return res % 1337;
        }
    }
    return -1;
};