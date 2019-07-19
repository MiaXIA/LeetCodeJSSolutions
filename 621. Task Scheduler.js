// Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters represent different tasks. Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.
// However, there is a non-negative cooling interval n that means between two same tasks, there must be at least n intervals that CPU are doing different tasks or just be idle.
// You need to return the least number of intervals the CPU will take to finish all the given tasks.

// Example:
// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
 
// Note:
// The number of tasks is in the range [1, 10000].
// The integer n is in the range [0, 100].

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = (tasks, n) => {
    if (n === 0) return tasks.length;
    let map = {};
    for (let key of tasks) map[key] = map[key] ? map[key] + 1 : 1;
    let max = 0, count = 0;
    Object.keys(map).forEach(key => {
        if (map[key] > max) {
            max = map[key];
            count = 1;
        } else if (map[key] === max) count++;
    });
    return Math.max((max - 1) * (n + 1) + count, tasks.length);
};