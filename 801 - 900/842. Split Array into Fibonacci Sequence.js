// Given a string S of digits, such as S = "123456579", we can split it into a Fibonacci-like sequence [123, 456, 579].
// Formally, a Fibonacci-like sequence is a list F of non-negative integers such that:
// 0 <= F[i] <= 2^31 - 1, (that is, each integer fits a 32-bit signed integer type);
// F.length >= 3;
// and F[i] + F[i+1] = F[i+2] for all 0 <= i < F.length - 2.
// Also, note that when splitting the string into pieces, each piece must not have extra leading zeroes, except if the piece is the number 0 itself.
// Return any Fibonacci-like sequence split from S, or return [] if it cannot be done.

// Example 1:
// Input: "123456579"
// Output: [123,456,579]

// Example 2:
// Input: "11235813"
// Output: [1,1,2,3,5,8,13]

// Example 3:
// Input: "112358130"
// Output: []
// Explanation: The task is impossible.

// Example 4:
// Input: "0123"
// Output: []
// Explanation: Leading zeroes are not allowed, so "01", "2", "3" is not valid.

// Example 5:
// Input: "1101111"
// Output: [110, 1, 111]
// Explanation: The output [11, 0, 11, 11] would also be accepted.

// Note:
// 1 <= S.length <= 200
// S contains only digits.

/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = (S) => {
    let len = S.length, result = [];
    const dfs = (res, index) => {
        if (index == len && res.length > 2){
            result = [...res];
            return;
        }
        let num = 0;
        for (let i = index; i < len; i++){
            num = num * 10 + parseInt(S.charAt(i));
            if (S.charAt(index) == "0" && i > index) return;
            if (num > Math.pow(2, 31) - 1) return;
            if (res.length < 2 || num == (res[res.length - 1] + res[res.length - 2])){
                res.push(num);
                dfs(res, i + 1);
                res.pop();
            }
        }
    }
    dfs([], 0);
    return result;
};