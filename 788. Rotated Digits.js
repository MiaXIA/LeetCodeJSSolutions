// X is a good number if after rotating each digit individually by 180 degrees, we get a valid number that is different from X.  Each digit must be rotated - we cannot choose to leave it alone.
// A number is valid if each digit remains a digit after rotation. 0, 1, and 8 rotate to themselves; 2 and 5 rotate to each other; 6 and 9 rotate to each other, and the rest of the numbers do not rotate to any other number and become invalid.
// Now given a positive number N, how many numbers X from 1 to N are good?

// Example:
// Input: 10
// Output: 4
// Explanation: 
// There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
// Note that 1 and 10 are not good numbers, since they remain unchanged after rotating.

// Note:
// N  will be in range [1, 10000].

/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = (N) => {    
    const sortOutDigit = (digit, sorts, step) => {
        if (digit == 3 || digit == 4 || digit == 7) {
            sorts[0] += step;           
        } else if (digit == 0 || digit == 1 || digit == 8) {
            sorts[1] += step;
        } else {
            sorts[2] += step;
        }            
    }

    let numLen = N.toString().length;    
    let digits = new Array(numLen); 
    for (let i = 0; i < numLen - 1; i++) {
        digits[i] = 0;
    }    
    digits[numLen - 1] = 1;

    let goodNumbers = 0;
    let sorts = [0, 1, 0];

    for (let i = 2; i <= N; i++) {
        for (let j = numLen - 1; j >= 0; j--) {
            if (digits[j] < 9) {
                sortOutDigit(digits[j], sorts, -1);
                digits[j] += 1;
                sortOutDigit(digits[j], sorts, 1);
                break;
            } else {                
                sorts[2]--;
                digits[j] = 0;
                sorts[1]++;
            }            
        }    
        
        if (sorts[0] == 0 && sorts[2] > 0) {
            goodNumbers++;
        }
    }

    return goodNumbers;
};