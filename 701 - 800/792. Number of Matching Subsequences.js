// Given string S and a dictionary of words words, find the number of words[i] that is a subsequence of S.

// Example :
// Input: 
// S = "abcde"
// words = ["a", "bb", "acd", "ace"]
// Output: 3
// Explanation: There are three words in words that are a subsequence of S: "a", "acd", "ace".

// Note:
// All words in words and S will only consists of lowercase letters.
// The length of S will be in the range of [1, 50000].
// The length of words will be in the range of [1, 5000].
// The length of words[i] will be in the range of [1, 50].

/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = (S, words) => {
    let result = 0;
    for (let word of words){
        let i = 0, j = 0;
        while (i < word.length && j < S.length){
            if (word[i] === S[j]){
                i += 1;
                j += 1;
            } else {
                j += 1;
            }
        }
        if(i === word.length) {
            result += 1;
        }
    }
    return result;
};

/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = (S, words) => {
    var result = 0;
    var lettersCount = 0;
    var letters = Object.create(null);
    for (var i = 0; i < words.length; i++) {
        if (!letters[words[i][0]]) {
            lettersCount++;
            letters[words[i][0]] = [[i, 1]];
        } else {
            letters[words[i][0]].push([i, 1]);
        }
    }
    
    var indexes;
    var nextLetter;
    for (var i = 0; i < S.length; i++) {
        if (letters[S[i]]) {
            indexes = letters[S[i]];
            for (var j = indexes.length - 1; j >= 0; j--) {
                if (words[indexes[j][0]].length === indexes[j][1]) { // whole word
                    indexes.splice(j, 1);
                    result++;
                } else {
                    nextLetter = words[indexes[j][0]][indexes[j][1]];
                    if (nextLetter === S[i]) { // same letter
                        indexes[j][1]++;
                    } else { // move to other letter
                        if (!letters[nextLetter]) {
                            lettersCount++;
                            letters[nextLetter] = [[indexes[j][0], indexes[j][1] + 1]];
                        } else {
                            letters[nextLetter].push([indexes[j][0], indexes[j][1] + 1]);
                        }
                        indexes.splice(j, 1);
                    }
                }
            }
            
            if (letters[S[i]].length === 0) {
                delete letters[S[i]];
                lettersCount--;
            }
            
            if (lettersCount === 0) {
                break;
            }
        }
    }
    
    return result;
};