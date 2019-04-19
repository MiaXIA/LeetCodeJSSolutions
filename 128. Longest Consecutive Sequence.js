// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
// Your algorithm should run in O(n) complexity.

// Example:
// Input: [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = (nums) => {
    const sequences = new Map();
    let longestSequence = 0;
    
    for (const num of nums) {
        if (sequences.has(num)) continue;
        
        const before = sequences.get(num - 1);
        const after = sequences.get(num + 1);
        
        let length = 1;
        length += (before ? before : 0);
        length += (after ? after : 0);
        
        sequences.set(num, length);
        longestSequence = Math.max(length, longestSequence);
        
        if (before) sequences.set(num - before, length);
        if (after) sequences.set(num + after, length);
    }
    return longestSequence;
};
