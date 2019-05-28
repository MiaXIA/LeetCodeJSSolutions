// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Input: "hello"
// Output: "holle"

// Example 2:
// Input: "leetcode"
// Output: "leotcede"
// Note:
// The vowels does not include the letter "y".

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = (s) => {
    s = s.split('');
    const w = 'aeiouAEIOU'.split('');
    const t = s.filter(_s => w.includes(_s));
    t.reverse();
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (w.includes(s[i])) s[i] = t[j++];
    }
    return s.join('');
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = (s) => {
    s = s.split('');
    const set = new Set('aeiouAEIOU');
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        if (!set.has(s[start]) && !set.has(s[end])) {
            start++;
            end--;
        } else if (!set.has(s[start])) start++;
        else if (!set.has(s[end])) end--;
        else {
            [s[start], s[end]] = [s[end], s[start]];
            start++;
            end--;
        }
    }
    return s.join('');
};