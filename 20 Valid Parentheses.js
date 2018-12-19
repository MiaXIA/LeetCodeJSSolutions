// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

//Example
//Input: '([)]'
//Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = s => {
    const pairMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    var pairStack = [];
    
    for(var i = 0; i < s.length; i++) {
        var ele = s[i];
        if(pairMap[ele]) {
            pairStack.push(pairMap[ele]);
        } else {
            if(ele !== pairStack.pop()) return false;
        }
    }
    return pairStack.length === 0;
};

//Test
console.log(isValid('[{()}]'));