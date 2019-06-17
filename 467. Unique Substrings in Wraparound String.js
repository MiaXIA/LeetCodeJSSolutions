// Consider the string s to be the infinite wraparound string of "abcdefghijklmnopqrstuvwxyz", so s will look like this: "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".
// Now we have another string p. Your job is to find out how many unique non-empty substrings of p are present in s. In particular, your input is the string p and you need to output the number of different non-empty substrings of p in the string s.
// Note: p consists of only lowercase English letters and the size of p might be over 10000.

// Example 1:
// Input: "a"
// Output: 1
// Explanation: Only the substring "a" of string "a" is in the string s.

// Example 2:
// Input: "cac"
// Output: 2
// Explanation: There are two substrings "a", "c" of string "cac" in the string s.

// Example 3:
// Input: "zab"
// Output: 6
// Explanation: There are six substrings "z", "a", "b", "za", "ab", "zab" of string "zab" in the string s.

/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = (p) => {
    const map = new Map();
    let res = 0;
    
    const isContinuous = (pre, next) => {
        if (next === 'a' && pre === 'z') return true;
        return next.charCodeAt() - pre.charCodeAt() === 1;
    }
    
    let i = 0;
    while (i < p.length) {
        let pre = p[i];
        let tmp = [0];
        
        if (!map.has(pre)) {
            map.set(pre, 1);
            tmp = [1];
        }
        let j = 1;
        
        while (j + i < p.length && isContinuous(pre, p[j + i])) {
            pre = p[j + i];
            const str = p.slice(i, i + j + 1);
            if (!map.has(pre)) {
                map.set(pre, j + 1) ;
                tmp[j] = tmp[j - 1] + (j > 25 ? 26 : j + 1);
            } else {
                const cached = map.get(pre);
                if (cached >= j + 1) tmp[j] = tmp[j - 1];
                else {
                    tmp[j] = tmp[j - 1] + Math.min(26, (j + 1 - cached));
                    map.set(pre, j + 1);
                }
            }
            j += 1;
        }
        res += tmp[j - 1];
        i += j;
    }
    return res;
};