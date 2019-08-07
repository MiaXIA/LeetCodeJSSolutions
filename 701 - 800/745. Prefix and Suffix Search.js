// Given many words, words[i] has weight i.
// Design a class WordFilter that supports one function, WordFilter.f(String prefix, String suffix). It will return the word with given prefix and suffix with maximum weight. If no word exists, return -1.

// Examples:
// Input:
// WordFilter(["apple"])
// WordFilter.f("a", "e") // returns 0
// WordFilter.f("b", "") // returns -1
 
// Note:
// words has length in range [1, 15000].
// For each test case, up to words.length queries WordFilter.f may be made.
// words[i] has length in range [1, 10].
// prefix, suffix have lengths in range [0, 10].
// words[i] and prefix, suffix queries consist of lowercase letters only.

/**
 * @param {string[]} words
 */
var WordFilter = function(words) {
    this.dic = {};
    for (let w = 0; w < words.length; w++){
        let len = words[w].length;
        let ps = [''].concat(words[w].split(''));
        let ss = words[w].split('').concat(['']).reverse();
        let prefix = '';
        for (let i = 0; i <= len; i++){
            prefix = prefix+ps[i];
            let suffix = '';
            for (let j = 0; j <= len; j++){
                suffix = ss[j] + suffix; 
                this.dic[prefix + '#' + suffix] = w;
            }
        }
    }
};

/** 
 * @param {string} prefix 
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function(prefix, suffix) {
    let key = prefix + '#' + suffix;
    if (this.dic[key] !== undefined) return this.dic[key];
    return -1;
};

/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */