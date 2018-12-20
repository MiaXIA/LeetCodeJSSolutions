// Given an array of strings, group anagrams together.

//Example
//Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
//Output:
// [
//     ["ate","eat","tea"],
//     ["nat","tan"],
//     ["bat"]
//   ]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = strs => {
    let strsCopy = strs.slice();
    let anagrams = {};
    let res = [];
    let pos = 0;
    
    strsCopy = strsCopy.map(str => str.split('').sort().join(''));
    
    for(let i = 0; i < strsCopy.length; i++) {
        let cur = strsCopy[i];
        if(anagrams[cur] !== undefined) res[anagrams[cur]].push(strs[i]);
        else {
            anagrams[cur] = pos;
            res[pos] = [strs[i]];
            pos++;
        }
    }
    return res;
};