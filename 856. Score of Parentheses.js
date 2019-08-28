// Given a balanced parentheses string S, compute the score of the string based on the following rule:
// () has score 1
// AB has score A + B, where A and B are balanced parentheses strings.
// (A) has score 2 * A, where A is a balanced parentheses string.

// Example 1:
// Input: "()"
// Output: 1

// Example 2:
// Input: "(())"
// Output: 2

// Example 3:
// Input: "()()"
// Output: 2

// Example 4:
// Input: "(()(()))"
// Output: 6
 
// Note:
// S is a balanced parentheses string, containing only ( and ).
// 2 <= S.length <= 50

/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = (S) => {
    if (S === '()') return 1;
    
    const stack = [], parts = [];
    let part = '';
    for (const char of S) {
        part += char;
        if (char === '(') {
            stack.push(0);
        } else {
            stack.pop();
            if (stack.length === 0) {
                parts.push(part);
                part = '';
            }
        }
    }
    if (parts.length === 1) {
        return scoreOfParentheses(S.slice(1, S.length - 1)) * 2;
    }
    return parts.reduce((prev, item) => prev + scoreOfParentheses(item), 0);
};