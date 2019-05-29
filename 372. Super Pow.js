// Your task is to calculate ab mod 1337 where a is a positive integer and b is an extremely large positive integer given in the form of an array.

// Example 1:
// Input: a = 2, b = [3]
// Output: 8

// Example 2:
// Input: a = 2, b = [1,0]
// Output: 1024

/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = (a, b) => {
    let res = 1;
    for (let n of b) {
        let next = 1;
        for (let i = 0; i < 10; i++) {
            next *= res;
            next %= 1337;
        }
        for (let i = 0; i < n; i++) {
            next *= a;
            next %= 1337;
        }
        res = next;
    }
    return res;
};