// An encoded string S is given.  To find and write the decoded string to a tape, the encoded string is read one character at a time and the following steps are taken:
// If the character read is a letter, that letter is written onto the tape.
// If the character read is a digit (say d), the entire current tape is repeatedly written d-1 more times in total.
// Now for some encoded string S, and an index K, find and return the K-th letter (1 indexed) in the decoded string.

// Example 1:
// Input: S = "leet2code3", K = 10
// Output: "o"
// Explanation: 
// The decoded string is "leetleetcodeleetleetcodeleetleetcode".
// The 10th letter in the string is "o".

// Example 2:
// Input: S = "ha22", K = 5
// Output: "h"
// Explanation: 
// The decoded string is "hahahaha".  The 5th letter is "h".

// Example 3:
// Input: S = "a2345678999999999999999", K = 1
// Output: "a"
// Explanation: 
// The decoded string is "a" repeated 8301530446056247680 times.  The 1st letter is "a".
 
// Note:
// 2 <= S.length <= 100
// S will only contain lowercase letters and digits 2 through 9.
// S starts with a letter.
// 1 <= K <= 10^9
// The decoded string is guaranteed to have less than 2^63 letters.

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var decodeAtIndex = (S, K) => {
    let len = 0;
    let i = 0;

    while (len < K - 1) {
        if (isNaN(S[i])) {
            len++;
        } else {
            let n = len * (parseInt(S[i]) - 1);
            if (len + n >= K) {
                if ((K - len) % len == 0) {
                    let j;
                    for (j = i - 1; j >= 0; j--) {
                        if (isNaN(S[j])) break;
                    }
                    return S[j];
                } else if ((K - len) % len == 1) return S[0];
                return decodeAtIndex(S, (K - len) % len);
            } else
            len += n;
        }
        i++;
    }

    if (isNaN(S[i])) return S[i];
    else return S[0];
}