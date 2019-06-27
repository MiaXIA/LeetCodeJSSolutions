// Given a list of strings, you need to find the longest uncommon subsequence among them. The longest uncommon subsequence is defined as the longest subsequence of one of these strings and this subsequence should not be any subsequence of the other strings.
// A subsequence is a sequence that can be derived from one sequence by deleting some characters without changing the order of the remaining elements. Trivially, any string is a subsequence of itself and an empty string is a subsequence of any string.
// The input will be a list of strings, and the output needs to be the length of the longest uncommon subsequence. If the longest uncommon subsequence doesn't exist, return -1.

// Example 1:
// Input: "aba", "cdc", "eae"
// Output: 3
// Note:
// All the given strings' lengths will not exceed 10.
// The length of the given list will be in the range of [2, 50].

/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = (strs) => {
    const sorter = (a, b) => {
        if (a.length >= b.length) return 1;
        if (a.length < b.length) return -1;
    }
    
    const isSubseq = (a, b) => {
        if (a.length > b.length) return false;
        let i = 0;
        let j = 0;
        while (i < a.length && j < b.length) {
            if (a[i] !== b[j]) j++;
            else {
                j++;
                i++;
            }
        }
        if (i === a.length) return true;
        return false;
    }
    
    strs = strs.sort(sorter);
    let lengthArr = [];
    
    for (let m = 0; m < strs.length; m++) {
        let currentStr = strs[m];
        let i = currentStr.length;
        let j = 0;
        let length = 0;
        
        for (let n = 0; n < strs.length; n++) {
            if (m === n) continue;
            let innerStr = strs[n];
            i = currentStr.length;
            while (i > 0) {
                let subStr = currentStr.substr(0, i);
                if (!isSubseq(subStr, innerStr)) {
                    length = subStr.length;
                    break;
                } else length = 0;
                i--;
            }
            if (length === 0) break;
        }
        lengthArr.push(length);
    }
    
    return Math.max(...lengthArr) > 0 ? Math.max(...lengthArr) : -1;
};