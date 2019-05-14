// Write a program to find the n-th ugly number.
// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 

// Example:
// Input: n = 10
// Output: 12
// Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

// Note:  
// 1 is typically treated as an ugly number.
// n does not exceed 1690.

/**
 * @param {number} n
 * @return {number}
 */
const factors = [2, 3, 5];

const findMinIndex = (output, p) => {
    let min = Infinity;
    let indexes;
    for (let i = 0; i < p.length; i++) {
        const value = output[p[i]] * factors[i];
        if (value < min) {
            indexes = [];
            min = output[p[i]] * factors[i];
            indexes.push(i);
        } else if (value === min) indexes.push(i);
    }
    return [min, indexes];
}

var nthUglyNumber = (n) => {
    const output = [1, 2, 3, 4];
    const p = [0, 0, 0];
    for (let i = 1; i < n; i++) {
        const [min, indexes] = findMinIndex(output, p);
        output[i] = min;
        indexes.forEach(index => {
            p[index] += 1;
        });
    }
    return output[n - 1];
};

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = (n) => {
    let index = Array(3).fill(0);
    let ugly = Array(n).fill(1);
    _.range(1, n).forEach(i => {
        ugly[i] = _.min([ugly[index[0]] * 2, ugly[index[1]] * 3, ugly[index[2]] * 5]);
        if (ugly[i] === ugly[index[0]] * 2) index[0]++;
        if (ugly[i] === ugly[index[1]] * 3) index[1]++;
        if (ugly[i] === ugly[index[2]] * 5) index[2]++;
    });
    return _.last(ugly);
};