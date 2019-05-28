// Write a function that reverses a string. The input string is given as an array of characters char[].
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// You may assume all the characters consist of printable ascii characters.

// Example 1:
// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = (s) => {
    if (s.length === 1) return s;
    let p1 = Math.floor(s.length / 2) - 1;
    let p2 = s.length % 2 === 0 ? Math.floor(s.length / 2) : Math.floor(s.length / 2) + 1;
    while (p1 >= 0) {
        [s[p1], s[p2]] = [s[p2], s[p1]];
        p1--;
        p2++;
    }
    return s;
};
