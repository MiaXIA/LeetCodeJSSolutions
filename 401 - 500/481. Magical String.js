// A magical string S consists of only '1' and '2' and obeys the following rules:
// The string S is magical because concatenating the number of contiguous occurrences of characters '1' and '2' generates the string S itself.
// The first few elements of string S is the following: S = "1221121221221121122……"
// If we group the consecutive '1's and '2's in S, it will be:
// 1 22 11 2 1 22 1 22 11 2 11 22 ......
// and the occurrences of '1's or '2's in each group are:
// 1 2	2 1 1 2 1 2 2 1 2 2 ......
// You can see that the occurrence sequence above is the S itself.
// Given an integer N as input, return the number of '1's in the first N number in the magical string S.
// Note: N will not exceed 100,000.

// Example 1:
// Input: 6
// Output: 3
// Explanation: The first 6 elements of magical string S is "12211" and it contains three 1's, so return 3.

/**
 * @param {number} n
 * @return {number}
 */
var magicalString = (n) => {
    if (typeof magicalString.a === 'undefined') {
        let n = 100000;
        const a = new Array(n + 3);
        a[0] = 1; a[1] = 2; a[2] = 2;
        let head = 2;
        let tail = 3;
        while (tail <= n) {
            a[tail] = a[tail - 1] ^ 3;
            tail++;
            if (a[head] === 2) {
                a[tail] = a[tail - 2] ^ 3;
                tail++;
            }
            head++;
        }
        magicalString.a = a;
    }
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (magicalString.a[i] === 1) res++;
    }
    return res;
};