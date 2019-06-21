// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

// Example:
// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]
 
// Note:
// You may use one character in the keyboard more than once.
// You may assume the input string will only contain letters of alphabet.

/**
 * @param {string[]} words
 * @return {string[]}
 */
const check = (map, el, count, res) => {
    for (let i = 1; i < el.length; i++) {
        if (!map.get(el[i].toLowerCase())) count = 1;
    }
    if (count === 0) res.push(el);
}

var findWords = (words) => {
    let res = [];
    let map1 = new Map(), map2 = new Map(), map3 = new Map();
    
    for (let char of 'qwertyuiop') map1.set(char, char);
    for (let char of 'asdfghjkl') map2.set(char, char);
    for (let char of 'zxcvbnm') map3.set(char, char);
    
    for (let el of words) {
        let count = 0;
        if (map1.get(el[0].toLowerCase())) check(map1, el, count, res);
        else if (map2.get(el[0].toLowerCase())) check(map2, el, count, res);
        else check(map3, el, count, res);
    }
    return res;
};