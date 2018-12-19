// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

//Example
//Input: haystack = 'hello', needle = 'll'
//Output: 2

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = (haystack, needle) => {
    return needle.length === 0 ? 0 : haystack.indexOf(needle);
};

//Another Solution
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = (haystack, needle) => {
    if(needle.length === 0) return 0;
    for(let i = 0; i <= haystack.length - needle.length; i++) {
        if(haystack.substring(i, needle.length + i) === needle) return i;
    }
    return -1;
};
