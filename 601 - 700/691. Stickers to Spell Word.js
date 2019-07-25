// We are given N different types of stickers. Each sticker has a lowercase English word on it.
// You would like to spell out the given target string by cutting individual letters from your collection of stickers and rearranging them.
// You can use each sticker more than once if you want, and you have infinite quantities of each sticker.
// What is the minimum number of stickers that you need to spell out the target? If the task is impossible, return -1.

// Example 1:
// Input:
// ["with", "example", "science"], "thehat"
// Output:
// 3
// Explanation:
// We can use 2 "with" stickers, and 1 "example" sticker.
// After cutting and rearrange the letters of those stickers, we can form the target "thehat".
// Also, this is the minimum number of stickers necessary to form the target string.

// Example 2:
// Input:
// ["notice", "possible"], "basicbasic"
// Output:
// -1
// Explanation:
// We can't form the target "basicbasic" from cutting letters from the given stickers.
// Note:
// stickers has length in the range [1, 50].
// stickers consists of lowercase English words (without apostrophes).
// target has length in the range [1, 15], and consists of lowercase English letters.
// In all test cases, all words were chosen randomly from the 1000 most common US English words, and the target was chosen as a concatenation of two random words.
// The time limit may be more challenging than usual. It is expected that a 50 sticker test case can be solved within 35ms on average.

/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = (stickers, target) => {
    const isEqual = (arr1, arr2) => {
        for (let i = 0; i < arr1.length; ++i) if (arr1[i] !== arr2[i]) return false;
        return true;
    }

    const minus = (arr1, arr2) => {
        let res = [];
        for (let i = 0; i < arr1.length; ++i) res[i] = arr1[i] <= 0 ? arr1[i] : arr1[i] - arr2[i];
        return res;
    }

    const isAllNonpositive = arr => {
        return arr.every(item => item <= 0);
    }

    const getString = arr => {
        return arr.reduce((acc, cur, idx) => {
            if (cur > 0) return acc + String.fromCharCode(idx + 97).repeat(cur);
            else return acc;
        }, '');
    }

    let ss = stickers.map(word => {
        let tmp = new Array(26).fill(0);
        for (let i = 0; i < word.length; ++i) tmp[word.charCodeAt(i) - 97]++;
        return tmp;
    });
    let root = new Array(26).fill(0);
    for (let i = 0; i < target.length; ++i) root[target.charCodeAt(i) - 97]++;
    let cache = new Set();
    let queue = [root];
    let size = 0, level = 0, front = null;
    while (queue.length !== 0) {
        size = queue.length;
        
        while (size--) {
            front = queue.shift();
            for (let w of ss) {
                let t = minus(front, w);
                let str = getString(t);
                if (isEqual(t, front) || cache.has(str)) continue;
                if (isAllNonpositive(t)) return level + 1;
                else {
                    queue.push(t);
                    cache.add(str);
                }
            }
        }
        level++;
    }
    return -1;
};