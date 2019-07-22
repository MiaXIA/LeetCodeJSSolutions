// A message containing letters from A-Z is being encoded to numbers using the following mapping way:
// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Beyond that, now the encoded string can also contain the character '*', which can be treated as one of the numbers from 1 to 9.
// Given the encoded message containing digits and the character '*', return the total number of ways to decode it.
// Also, since the answer may be very large, you should return the output mod 109 + 7.

// Example 1:
// Input: "*"
// Output: 9
// Explanation: The encoded message can be decoded to the string: "A", "B", "C", "D", "E", "F", "G", "H", "I".

// Example 2:
// Input: "1*"
// Output: 9 + 9 = 18
// Note:
// The length of the input string will fit in range [1, 105].
// The input string will only contain the character '*' and digits '0' - '9'.

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = (s) => {
    let oneDigit = 1;
    let twoDigit = 0;
    const counts = new Array(9).fill().map((v, i) => i + 1);
  
    for (let i = 1; i <= s.length; i++) {
      const checkDigit = s[i - 1] === '*' ? counts.slice() : [Number(s[i - 1])];
      const lastDigit = s[i - 2] === '*' ? counts.slice() : [Number(s[i - 2]) || 0];
      let curDigit = addDigitPaths(lastDigit, checkDigit, oneDigit, twoDigit);
  
      [twoDigit, oneDigit] = [oneDigit, curDigit % (10 ** 9 + 7)]
    }
    return oneDigit;
  }
  
  const addDigitPaths = (lastDigit, checkDigit, oneDigit, twoDigit) => {
    let curDigit = 0;
    for (const check of checkDigit) {
        curDigit += check === 0 ? 0: oneDigit;
      for (const last of lastDigit) {
        const num = last * 10 + check;
        if (num >= 10 && num <= 26) {
          curDigit += twoDigit;
        }
      }
    }
    return curDigit;
  }