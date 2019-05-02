// All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.
// Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

// Example:
// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC", "CCCCCAAAAA"]

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = (s) => {
    var temp, result = [], seen = {};
    for (j = 0; j + 9 < s.length; j++) {
        temp = s.substring(j, j + 10);
        if (!seen.hasOwnProperty(temp)) seen[temp] = 1;
        else seen[temp] = seen[temp] + 1;
    }
    result = Object.keys(seen).filter(el => seen[el] > 1);
    return result;
};