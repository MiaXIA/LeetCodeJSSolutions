// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:
// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = (num1, num2) => {
    let sumStr = '';
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carryOver = 0;
    
    while (i >= 0 || j >= 0 || carryOver > 0) {
        let digit = carryOver;
        
        digit += (i >= 0) ? parseInt(num1.charAt(i--)) : 0;
        digit += (j >= 0) ? parseInt(num2.charAt(j--)) : 0;
        
        sumStr = (digit % 10).toString().concat(sumStr);
        carryOver = Math.floor(digit / 10);
    }
    return sumStr.length === 0 ? '0' : sumStr;
};