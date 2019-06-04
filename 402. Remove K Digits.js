// Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

// Note:
// The length of num is less than 10002 and will be ≥ k.
// The given num does not contain any leading zero.

// Example 1:
// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

// Example 2:
// Input: num = "10200", k = 1
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

// Example 3:
// Input: num = "10", k = 2
// Output: "0"
// Explanation: Remove all the digits from the number and it is left with nothing which is 0.

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = (num, k) => {
    if (num.length <= k) return '0';
    if (k <= 0) return num;
    
    let stack = [];
    let tempStack = [];
    
    for (let n of num) stack.unshift(n);
    
    while (k > 0 || stack.length) {
        let candidate = stack[stack.length - 1];
        if (candidate === '0') stack.pop();
        else if (candidate === '9') {
            stack.pop();
            k--;
        } else {
            if (k === 0) break;
            tempStack.push(stack.pop());
            let next = stack[stack.length - 1];
            
            if (next === '0' || candidate > next) {
                tempStack.pop();
                k--;
                continue;
            }
            
            tempStack.push(stack.pop());
            candidate = next;
            
            while (stack.length) {
                next = stack[stack.length - 1];
                
                if (candidate > next) break;
                else {
                    candidate = next;
                    tempStack.push(stack.pop());
                }
            }
            tempStack.pop();
            
            while (tempStack.length) stack.push(tempStack.pop());
            
            k--;
        }
        if (k === 0) break;
    }
    return stack.length ? stack.reverse().join('') : '0';
};