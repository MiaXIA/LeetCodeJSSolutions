// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
// Note that the row index starts from 0.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:
// Input: 3
// Output: [1,3,3,1]

// Follow up:
// Could you optimize your algorithm to use only O(k) extra space?

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = (rowIndex) => {
    rowIndex += 1;
    if (rowIndex === 1) return [1];
    const r = [[1]];
    for (let i = 1; i < rowIndex; i++) {
        const _r = [];
        for (let j = 0; j < r[i - 1].length - 1; j++) {
            _r.push(r[i - 1][j] + r[i - 1][j + 1]);
        }
        _r.unshift(1);
        _r.push(1);
        r.push(_r);
    }
    return r[r.length - 1];
};

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = (rowIndex) => {
    let r = [1];
    for (let i = 1; i <= rowIndex; i++) {
        r.push(0);
        for (let j = i; j >= 1; j--) {
            r[j] = r[j] + r[j - 1];
        }
    }
    return r;
};