// Given an encoded string, return it's decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

// Examples:
// s = "3[a]2[bc]", return "aaabcbc".
// s = "3[a2[c]]", return "accaccacc".
// s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = (s) => {
    let stack = [];
    let strNum = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ']') {
            let str = '';
            while (stack.length > 0 && stack[stack.length - 1] !== '[') str = stack.pop() + str;
            stack.pop();
            let size = stack.pop();
            let str2 = '';
            while (size > 0) {
                str2 += str;
                size--;
            }
            stack.push(str2);
        } else {
            if (!isNaN(s[i])) strNum += s[i];
            else {
                if (strNum !== '') {
                    stack.push(parseInt(strNum));
                    strNum = '';
                }
                stack.push(s[i]);
            }
        }
    }
    return stack.join('');
};