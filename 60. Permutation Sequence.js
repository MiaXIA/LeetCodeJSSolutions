// The set [1,2,3,...,n] contains a total of n! unique permutations.
// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

// Note
// Given n will be between 1 and 9 inclusive.
// Given k will be between 1 and n! inclusive.

//Examples
//Input: n = 3, k = 3
//Output: "213"

//Input: n = 4, k = 9
//Output: "2314"

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = (n, k) => {
    var ns = [], res = [], pos = k - 1;
    for (var i = 1; i <= n; ++i) {
        ns.push(i);
    }
    var nfac = ns.reduce((prev, curr) => prev * curr);
    if ( k < 1 || k > nfac) {
        return "error";
    }
    for ( var j = n; j >= 1; --j) {
        nfac/=j;
        res.push(ns.splice(parseInt(pos/nfac), 1)[0]);
        pos%=nfac;
    }
    return res.join("");
};
