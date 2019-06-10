// Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.
// Please note that the string does not contain any non-printable characters.

// Example:
// Input: "Hello, my name is John"
// Output: 5

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = (s) => {
    var count = 0;
    var markInStr = false;
    for (var i = 0; i < s.length; i++) {
        if (s[i] !== ' ') markInStr = true;
        if (markInStr && ((s[i] === ' ') || i === s.length - 1)) {
            markInStr = false;
            count++;
        }
    }
    return count;
};