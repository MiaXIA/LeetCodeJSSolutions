// You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

//Example
//Input: s = 'barfoothefoobarman', words = ['foo', 'bar']
//Output: [0, 9]
//Explanation: Substring starting at index 0 and 09 are 'barfoo' and 'foobar' respectively

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = (s, words) => {
    if(!words || words.length === 0) return [];
    const m = words.length, n = words[0].length, len = m * n, res = [];
    const map = {};
    for(word of words) map[word] = ~~map[word] + 1;
    
    for(let i = 0; i < s.length - len + 1; i++) {
        const temp = Object.assign({}, map);
        
        for(let j = i; j < i + len; j += n) {
            const str = s.substr(j, n);
            if(!(str in temp)) break;
            if(--temp[str] === 0) delete temp[str];
        }
        if(Object.keys(temp).length === 0) res.push(i);
    }
    return res;
};

//Test
console.log(findSubstring('wordgoodgoodgoodbestword', ["word","good","best","word"]));