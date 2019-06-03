// Given an integer n, return 1 - n in lexicographical order.
// For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].
// Please optimize your algorithm to use less time and space. The input size may be as large as 5,000,000.

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = (n) => {
    let arr = [];
    for (let i = 1; i <= n; i++) arr.push(i);
    return arr.sort();
};

/**
 * @param {number} n
 * @return {number[]}
 */
const dfs = (l, num, target, res) => {
    var st = 0;
    if (l === 0) st++;
    for (var i = st; i <= 9; i++) {
        if ((num * 10 + i) > target) continue;
        res.push(num * 10 + i);
        dfs(l + 1, num * 10 + i, target, res);
    }
    return ;
}

var lexicalOrder = (n) => {
    if (n < 1) return [];
    var res = [];
    dfs(0, 0, n, res);
    return res;
};