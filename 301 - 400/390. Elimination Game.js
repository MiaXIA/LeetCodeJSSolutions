// There is a list of sorted integers from 1 to n. Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
// Repeat the previous step again, but this time from right to left, remove the right most number and every other number from the remaining numbers.
// We keep repeating the steps again, alternating left to right and right to left, until a single number remains.
// Find the last number that remains starting with a list of length n.

// Example:
// Input:
// n = 9,
// 1 2 3 4 5 6 7 8 9
// 2 4 6 8
// 2 6
// 6
// Output:
// 6

/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = (n) => {
    if (n === 1) return 1;
    let pass = 1;
    let start = 1;
    
    while (n + 1 > Math.pow(2, pass)) {
        if (pass === 1) start = 2;
        else if (pass % 2 === 0) {
            if (Math.floor(n / Math.pow(2, pass - 1)) % 2 === 1) start = start + Math.pow(2, pass - 1);
        }
        else if (pass % 2 === 1) start = start + Math.pow(2, pass - 1);
        pass++;
    }
    return start;
};