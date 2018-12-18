//Implement atoi which converts a string to an integer.
//The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.
//The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.
//If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.
//If no valid conversion could be performed, a zero value is returned.
//Note:
//Only the space character ' ' is considered as whitespace character.
//Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.

//Example
//Input: '      -42'
//Output: -42
//Explanation: The first non-whitespace character is '-', which is the minus sign. Then take as many numerical digits as possible, which gets 42.

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = str => {
    let matched = str.match(/^(?:\s*)[\+\-]?\d+/g);
    if(!matched || matched.length === 0) return 0;
    let parsedStr = matched[0].replace(/\s*/, '');
    let res;
    const int_max = (1<<31>>>0) - 1;
    const int_min = (1<<31);
    if(parsedStr > int_max) {
        res = int_max;
    } else if (parsedStr < int_min) {
        res = int_min;
    } else {
        res = parsedStr;
    }
    return res;
};

//Test
console.log(myAtoi('      -4193 with words'));
