// Given an integer, write an algorithm to convert it to hexadecimal. For negative integer, two’s complement method is used.

// Note:
// All letters in hexadecimal (a-f) must be in lowercase.
// The hexadecimal string must not contain extra leading 0s. If the number is zero, it is represented by a single zero character '0'; otherwise, the first character in the hexadecimal string will not be the zero character.
// The given number is guaranteed to fit within the range of a 32-bit signed integer.
// You must not use any method provided by the library which converts/formats the number to hex directly.

// Example 1:
// Input:
// 26
// Output:
// "1a"

// Example 2:
// Input:
// -1
// Output:
// "ffffffff"

/**
 * @param {number} num
 * @return {string}
 */
var toHex = (num) => {
    if (num === 0) return '0';
    const words = '0123456789abcdef';
    let res = '';
    while (num !== 0) {
        res = words[num & 0xf] + res;
        num >>>= 4;
    }
    return res;
};

/**
 * @param {number} num
 * @return {string}
 */
var toHex = (num) => {
    if (num === 0) return '0';
    const words = '0123456789abcdef';
    let res = '';
    let flag = 1;
    if (num < 0) {
        num = -num - 1;
        flag = -1;
    }
    while (num / 16) {
        res += words[`${num % 16}`];
        num = parseInt(num / 16);
    }
    res = res.split('').reverse().join('');
    if (flag === -1) {
        res = res.split('').map(_res => words[15 - words.indexOf(_res)]).join('');
        res = 'f'.repeat(8 - res.length) + res;
    }
    return res;
};