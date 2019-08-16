// We are given two strings, A and B.
// A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

// Example 1:
// Input: A = 'abcde', B = 'cdeab'
// Output: true

// Example 2:
// Input: A = 'abcde', B = 'abced'
// Output: false

// Note:
// A and B will have length at most 100.

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = (A, B) => {
    let str = A;
    while (A!==B){
        let temp = A.split('');
        let first = temp.shift();
        temp.push(first);
        A = temp.join('');
        if (A === str){
            return false;
        }
    }
    return true;
};

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = (A, B) => {
	if (A === B) return true;
    if (A.length !== B.length) return false;
    
	let precedingString = '';
    let startIndex = 0;
    for (var i = 0; i < A.length; i++) {
		if (A.charAt(i) === B.charAt(0)) {
			startIndex = i;
			if ((A.substring(startIndex) + precedingString) === B) {
				return true;
			}
		}
		precedingString += A.charAt(i);
    }
    return false;
};