// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Example 1:
// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".

// Example 2:
// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".

// Example 3:
// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".

// Example 4:
// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".

// Note:
// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.

// Follow up:
// Can you solve it in O(N) time and O(1) space?

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const pushOrPop = (stack, val) => !val ? undefined : val !== '#' ? stack.push(val) : stack.pop(val);

var backspaceCompare = (S, T) => {
    const maxLength = Math.max(S.length, T.length);
    let sStack = [];
    let tStack = [];
    for (let i = 0; i < maxLength; i++) {
        pushOrPop(sStack, S[i]);
        pushOrPop(tStack, T[i]);
    }
    return sStack.join('') === tStack.join('');
};