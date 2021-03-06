// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string ''.

//Example
//Input: ['flower', 'flow', 'flight']
//Output: 'fl'

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = strs => {
    if(strs === undefined || strs.length === 0) return '';
    
    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
};

//Test
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));