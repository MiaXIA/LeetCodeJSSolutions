// Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

// Example 1:
// Input: S = "loveleetcode", C = 'e'
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 
// Note:
// S string length is in [1, 10000].
// C is a single character, and guaranteed to be in string S.
// All letters in S and C are lowercase.

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = (S, C) => {
    const values = S.split(''), result = [];
    for (let i = 0; i < values.length; i++) {
        result.push(shortestDistance(values, C, i));
    }
    return result;
};

const shortestDistance = (values, char, index) => {
    let target = values[index], result = 0;
    let left = Infinity, right = Infinity, count = 0;
    if (target === char) return result;
    for (let i = index; i < values.length; i++) {
        if (values[i] === char) { 
            right = count;
            break; 
        }
        count++;
    }
    count = 0;
    for (let i = index; i >= 0; i--) {
        if (values[i] === char) { 
            left = count;
            break; 
        }
        count++;
    }
    return Math.min(left, right);
}