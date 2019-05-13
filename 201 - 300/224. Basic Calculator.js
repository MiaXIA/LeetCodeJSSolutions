// Implement a basic calculator to evaluate a simple expression string.
// The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .

// Example 1:
// Input: "1 + 1"
// Output: 2

// Example 2:
// Input: " 2-1 + 2 "
// Output: 3

// Example 3:
// Input: "(1+(4+5+2)-3)+(6+8)"
// Output: 23

// Note:
// You may assume that the given expression is always valid.
// Do not use the eval built-in library function.

/**
 * @param {string} s
 * @return {number}
 */
var calculate = (s) => {
    s = s.replace(/ /g, '');
    let tokens = s.split(/(\(|\)|\+|\-|\d+)/).filter(x => x);
    tokens = ["(", ...tokens, ")"];
    let ops = [];
    let nums = [];
    
    for (let t of tokens) {
        if (t === '(') ops.push(nums.length);
        else if (t === ')') {
            let numIndex = ops.pop();
            let tmp = parseInt(nums[numIndex]);
            for (let i = numIndex + 1; i < nums.length; i += 2) {
                let op = nums[i];
                let right = nums[i + 1];
                if (op === '+') tmp += parseInt(right);
                else tmp -= right;
            }
            nums.splice(numIndex, nums.length - numIndex, tmp);
        } else nums.push(t);
    }
    return nums[0];
};