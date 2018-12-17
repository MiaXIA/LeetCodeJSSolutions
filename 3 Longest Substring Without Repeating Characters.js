//Given a string, find the length of the longest substring without repeating characters.

//Example
//Input: abcabcbb
//Output: 3
//Expanation: answer is 'abc' with the length of 3

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = (s) => {
    const map = new Map();
    let left = 0;
    let maxLength = 0;
    
    for(let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        const right = i + 1;
        
        if(map.has(char) && map.get(char) >= left) {
            left = map.get(char) + 1;
        } else if (right - left > maxLength) {
            maxLength = right - left;
        }
        map.set(char, i);
    }
    return maxLength;
};

//Test
console.log(lengthOfLongestSubstring('abcabcbb'));

//Runtime: 128ms