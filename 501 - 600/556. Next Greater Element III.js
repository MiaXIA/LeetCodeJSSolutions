// Given a positive 32-bit integer n, you need to find the smallest 32-bit integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive 32-bit integer exists, you need to return -1.

// Example 1:
// Input: 12
// Output: 21
 
// Example 2:
// Input: 21
// Output: -1

/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = (n) => {
    let s = '' + n;
    let j = s.length - 1, i = j - 1;
    while (s[i + 1] <= s[i]) i--;
    if (i === -1) return -1;
    while (s[j] <= s[i]) j--;
    let right = s.substring(i + 1, j) + s[i] + s.substr(j + 1);
    let res = parseInt(s.substr(0, i) + s[j] + right.split('').reverse().join(''));
    return res < 2147483648 ? res : -1;
};

/**
 * @param {number} n
 * @return {number}
 */
const reverse = (n, mag) => {
    let res = 0;
    for (let i = 0; mag >= 1; i++, mag /= 10) res += getIthDigit(n, i) * mag;
    return res || n % 10;
}

const getIthDigit = (n, i) => {
    if (n = ~~(n / Math.pow(10, i))) return n % 10;
}

var nextGreaterElement = (n) => {
    let i = 1, a = n % 10;
    while (a <= (a = getIthDigit(n, i))) i++;
    if (a === undefined) return -1;
    
    let j = 0, b;
    while ((b = getIthDigit(n, j)) <= a) j++;
    
    let mag = Math.pow(10, i);
    n += (b - a) * mag + (a - b) * Math.pow(10, j);
    let res = n - n % mag + reverse(n, mag / 10);
    return res < 2147483648 ? res : -1;
};