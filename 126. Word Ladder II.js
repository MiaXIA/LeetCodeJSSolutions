// Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:
// Only one letter can be changed at a time
// Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

// Note:
// Return an empty list if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.

// Example 1:
// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]
// Output:
// [
//   ["hit","hot","dot","dog","cog"],
//   ["hit","hot","lot","log","cog"]
// ]

// Example 2:
// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]
// Output: []
// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = (beginWord, endWord, wordList) => {
    var size = beginWord.length;
    var i = 0;
    var queue = [];
    var solutions = [];
    var minSizeSolution = Infinity;
    var visited = new Map();
    var adjacent = new Map();
    
    {
        var allWords = [...new Set([...wordList, beginWord])];
        for (var i = 0; i < allWords.length - 1; i++) {
            for (var j = i + 1; j < allWords.length; j++) {
                var nbDiff = 0;
                for (var k = 0; k < size; k++) {
                    if (allWords[i][k] != allWords[j][k]) nbDiff++;
                    if (nbDiff > 1) break;
                }
                if (nbDiff === 1) {
                    if (!adjacent.get(allWords[i])) adjacent.set(allWords[i], new Array());
                    adjacent.get(allWords[i]).push(allWords[j]);
                    if (!adjacent.get(allWords[j])) adjacent.set(allWords[j], new Array());
                    adjacent.get(allWords[j]).push(allWords[i]);
                }
            }
        }
    }
    
    queue.push([beginWord]);
    while (queue.length) {
        var currSolution = queue.shift();
        if (currSolution.length + 1 > minSizeSolution) break;
        var currentWord = currSolution[currSolution.length - 1];
        var currAdjacents = adjacent.get(currentWord);
        if (currAdjacents) {
            for (var i = 0; i < currAdjacents.length; i++) {
                var word = currAdjacents[i];
                if (word === endWord) {
                    if (currSolution.length + 1 <= minSizeSolution) {
                        solutions.push([...currSolution, word]);
                        minSizeSolution = currSolution.length + 1;
                    }
                    break;
                }
                if (!visited.get(word)) queue.push([...currSolution, word]);
            }
            visited.set(currentWord, 1);
        }
    }
    return solutions;
};