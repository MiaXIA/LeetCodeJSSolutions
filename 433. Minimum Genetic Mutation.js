// A gene string can be represented by an 8-character long string, with choices from "A", "C", "G", "T".
// Suppose we need to investigate about a mutation (mutation from "start" to "end"), where ONE mutation is defined as ONE single character changed in the gene string.
// For example, "AACCGGTT" -> "AACCGGTA" is 1 mutation.
// Also, there is a given gene "bank", which records all the valid gene mutations. A gene must be in the bank to make it a valid gene string.
// Now, given 3 things - start, end, bank, your task is to determine what is the minimum number of mutations needed to mutate from "start" to "end". If there is no such a mutation, return -1.

// Note:
// Starting point is assumed to be valid, so it might not be included in the bank.
// If multiple mutations are needed, all mutations during in the sequence must be valid.
// You may assume start and end string is not the same.
 
// Example 1:
// start: "AACCGGTT"
// end:   "AACCGGTA"
// bank: ["AACCGGTA"]
// return: 1
 
// Example 2:
// start: "AACCGGTT"
// end:   "AAACGGTA"
// bank: ["AACCGGTA", "AACCGCTA", "AAACGGTA"]
// return: 2
 
// Example 3:
// start: "AAAAACCC"
// end:   "AACCCCCC"
// bank: ["AAAACCCC", "AAACCCCC", "AACCCCCC"]
// return: 3

/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
const oneM = (a, b) => {
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) count++;
    }
    return count === 1;
}

var minMutation = (start, end, bank) => {
    var set = new Set(bank);
    if (!set.has(end)) return -1;
    var visited = new Set();
    visited.add(start);
    
    var q = [];
    q.push(start);
    var count = 1;
    while (q.length !== 0) {
        var size = q.length;
        
        for (var i = 0; i < size; i++) {
            var a = q.shift();
            if (oneM(a, end)) return count;
            set.forEach(el => {
                if (!visited.has(el) && oneM(a, el)) {
                    q.push(el);
                    visited.add(el);
                }
            });
        }
        count++;
    }
    return -1;
};

/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
const oneM = (a, b) => {
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) count++;
    }
    return count === 1;
}

var minMutation = (start, end, bank) => {
    var set = new Set(bank);
    var visited = new Set();
    visited.add(start);
    if (!set.has(end)) return -1;
    
    const dfs = a => {
        if (oneM(a, end)) return 1;
        
        var min = Number.MAX_VALUE;
        set.forEach((el) => {
            if (oneM(a, el) && !visited.has(el)) {
                visited.add(el);
                var c = dfs(el);
                if (c !== Number.MAX_VALUE) min = Math.min(min, c + 1);
                visited.delete(el);
            }
        });
        return min;
    }
    
    var count = dfs(start);
    if (count === Number.MAX_VALUE) return -1;
    return count;
};