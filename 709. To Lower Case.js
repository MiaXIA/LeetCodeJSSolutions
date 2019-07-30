// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

// Example 1:
// Input: "Hello"
// Output: "hello"

// Example 2:
// Input: "here"
// Output: "here"

// Example 3:
// Input: "LOVELY"
// Output: "lovely"

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = (str) => {
    let lowercaseString = '';
    for (let i = 0; i < str.length; i++) {
        const charcode = str[i].charCodeAt();
        if (charcode <= 90 && charcode >= 65) {
            lowercaseString += String.fromCharCode(charcode + 32);
            continue;
        }
        lowercaseString += str[i]
    }
    return lowercaseString;
};