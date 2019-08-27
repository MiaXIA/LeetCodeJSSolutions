// We had some 2-dimensional coordinates, like "(1, 3)" or "(2, 0.5)".  Then, we removed all commas, decimal points, and spaces, and ended up with the string S.  Return a list of strings representing all possibilities for what our original coordinates could have been.
// Our original representation never had extraneous zeroes, so we never started with numbers like "00", "0.0", "0.00", "1.0", "001", "00.01", or any other number that can be represented with less digits.  Also, a decimal point within a number never occurs without at least one digit occuring before it, so we never started with numbers like ".1".
// The final answer list can be returned in any order.  Also note that all coordinates in the final answer have exactly one space between them (occurring after the comma.)

// Example 1:
// Input: "(123)"
// Output: ["(1, 23)", "(12, 3)", "(1.2, 3)", "(1, 2.3)"]

// Example 2:
// Input: "(00011)"
// Output:  ["(0.001, 1)", "(0, 0.011)"]
// Explanation: 
// 0.0, 00, 0001 or 00.01 are not allowed.

// Example 3:
// Input: "(0123)"
// Output: ["(0, 123)", "(0, 12.3)", "(0, 1.23)", "(0.1, 23)", "(0.1, 2.3)", "(0.12, 3)"]

// Example 4:
// Input: "(100)"
// Output: [(10, 0)]
// Explanation: 
// 1.0 is not allowed.
 
// Note:
// 4 <= S.length <= 12.
// S[0] = "(", S[S.length - 1] = ")", and the other elements in S are digits.
 
/**
 * @param {string} S
 * @return {string[]}
 */
var ambiguousCoordinates = (S) => {
    let res = [];
    S = S.substring(1, S.length - 1);
    for (let i = 1; i < S.length; i++){
       let s1 = S.substr(0, i);
       let s2 = S.substr(i);
       if (s1.length > 1 && parseInt(s1) === 0 || s2.length > 1 && parseInt(s2) === 0){
           continue;
       }
    let integer = getValues(s1);
        console.log(integer)
    let float = getValues(s2);
        console.log(float)
    for (let j = 0; j < integer.length; j++){
        for (let k = 0; k < float.length; k++){
            res.push('(' + integer[j] + ', ' + float[k] + ')' );
        }
    }
  }
    return res;
};

const getValues = (str) => {
    let res = [];
    if (str.length === 1 || str[0] !== '0'){
        res.push(str);
    }
    for (let i = 1; i < str.length; i++){
        let integer = str.substr(0, i);
        let float = str.substr(i);
        if (integer.length > 1 && integer[0] === '0'){
            continue;
        }
        if (parseInt(float) === 0 || float[float.length - 1] === '0'){
            continue;
        }
        res.push(integer + '.' + float);
    }
    return res;
}