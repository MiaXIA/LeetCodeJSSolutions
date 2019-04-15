// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

//Example
//Input: '(()'
//Output: 2
//Explanation: The longest valid parentheses substring is '()'

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = s => {
    var resStack = []
    var res = 0
    var left = -1
    for(var i = 0; i < s.length; i++) {
        if(s[i] == '(') resStack.push(i)
        else {
            if (resStack.length == 0) left = i
            else {
                resStack.pop()
                if(resStack.length == 0) res = Math.max(res, i - left)
                else res = Math.max(res, i - resStack[resStack.length - 1])
            }
        }
    }
    return res;
};

//Test
console.log(longestValidParentheses('(()'));