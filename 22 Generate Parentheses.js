//Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

//Example
//Input: n = 3
//Output:
// [
//     "((()))",
//     "(()())",
//     "(())()",
//     "()(())",
//     "()()()"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
var generate = (l, r, s, res) => {
    if(l > r) return;
    if(!l && !r) return res.push(s);
    if(l) generate(l - 1, r, s + '(', res);
    if(r) generate(l, r - 1, s + ')', res);
}

var generateParenthesis = n => {
    let res = [];
    generate(n, n, '', res);
    return res;
};

//Test
console.log(generateParenthesis(3));