// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:
// Only one letter can be changed at a time.
// Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

// Note:
// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.

// Example 1:
// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.

// Example 2:
// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = (beginWord, endWord, wordList) => {
    const wordSet = new Set(wordList);
    
    if (!wordSet.has(endWord) || beginWord === endWord) return 0;
    
    wordSet.delete(beginWord);
    const toTry = [{word: beginWord, score: 1}];
    while (toTry.length) {
        const {word, score} = toTry.shift();
        if (word === endWord) return score;
        for (let i = 0; i < word.length; i++) {
            for (let j = 'a'.charCodeAt(0); j <= 'z'.charCodeAt(0); j++) {
                const letter = String.fromCharCode(j);
                if (word.charAt(i) === letter) continue;
                const nextWord = word.substr(0, i) + letter + word.substr(i + 1);
                if (!wordSet.has(nextWord)) continue;
                wordSet.delete(nextWord);
                toTry.push({
                    score: score + 1,
                    word: nextWord,
                });
            }
        }
    }
    return 0;
};