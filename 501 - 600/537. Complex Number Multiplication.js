// Given two strings representing two complex numbers.
// You need to return a string representing their multiplication. Note i2 = -1 according to the definition.

// Example 1:
// Input: "1+1i", "1+1i"
// Output: "0+2i"
// Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.

// Example 2:
// Input: "1+-1i", "1+-1i"
// Output: "0+-2i"
// Explanation: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i, and you need convert it to the form of 0+-2i.
// Note:
// The input strings will not have extra blank.
// The input strings will be given in the form of a+bi, where the integer a and b will both belong to the range of [-100, 100]. And the output should be also in this form.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = (a, b) => {
    let aArray = a.split('+');
    let bArray = b.split('+');
    let imagNumA = aArray[1].substring(0, aArray[1].length - 1);
    let imagNumB = bArray[1].substring(0, bArray[1].length - 1);
    let realPart = (Number(aArray[0]) * Number(bArray[0])) - (Number(imagNumA) * Number(imagNumB));
    let imagPart = (Number(imagNumA) * Number(bArray[0]) + Number(aArray[0]) * Number(imagNumB));
    
    return `${String(realPart)}+${String(imagPart)}i`;
};