// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

// Example:
// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = (n, k) => {
    const r = [];
    const list = [];
    for (let i = 1; i <= n; i++) {
        list.push(i);
    }
    
    const func = (arr, _r = []) => {
        if (_r.length === k) r.push(_r);
        if (arr.length === 0) return;
        for (let i = 0; i < arr.length; i++) {
            func(arr.slice(i + 1), _r.concat([arr[i]]));
        }
    }
    
    func(list);
    return r;
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = (n, k) => {
    const r = [];
    
    const func = (arr, start, space) => {
        if (space === 0) {
            r.push(arr.slice());
            return;
        }
        for (let i = start; i <= n - space + 1; i++) {
            arr.push(i);
            func(arr, i + 1, space - 1);
            arr.pop();
        }
    }
    func([], 1, k);
    return r;
};