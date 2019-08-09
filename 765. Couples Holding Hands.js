// N couples sit in 2N seats arranged in a row and want to hold hands. We want to know the minimum number of swaps so that every couple is sitting side by side. A swap consists of choosing any two people, then they stand up and switch seats.
// The people and seats are represented by an integer from 0 to 2N-1, the couples are numbered in order, the first couple being (0, 1), the second couple being (2, 3), and so on with the last couple being (2N-2, 2N-1).
// The couples' initial seating is given by row[i] being the value of the person who is initially sitting in the i-th seat.

// Example 1:
// Input: row = [0, 2, 1, 3]
// Output: 1
// Explanation: We only need to swap the second (row[1]) and third (row[2]) person.

// Example 2:
// Input: row = [3, 2, 0, 1]
// Output: 0
// Explanation: All couples are already seated side by side.

// Note:
// len(row) is even and in the range of [4, 60].
// row is guaranteed to be a permutation of 0...len(row)-1.

/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = (row) => {
    const pos = {};
    for (let i = 0; i < row.length; i++) {
      pos[row[i]] = i;
    }
  
    let count = 0;
    for (let i = 1; i < row.length; i += 2) {
      while ((row[i]^1) !== row[i-1]) {
        let idx = pos[row[i]^1]^1;
        [row[i], row[idx]] = [row[idx], row[i]];
        count++;
      }
    }
    return count;
  }

  /**
 * @param {number[]} row
 * @return {number}
 */
const minSwapsCouples = (row) => {
    let graph = new Array(row.length >> 1);
    for (let i = 0; i < graph.length; ++i) {
        graph[i] = [];
    }
    let i = 0;
    while (i < row.length - 1) {
        let firstNode = row[i] >> 1;
        let secondNode = row[i + 1] >> 1;
        if (firstNode !== secondNode) {
            graph[firstNode].push(secondNode);
            graph[secondNode].push(firstNode);
        }
        i += 2;
    }
    let visited = new Array(graph.length);
    visited.fill(false);
    let swaps = 0;
    for (let i = 0; i < graph.length; ++i) {
        if (visited[i]) {
            continue;
        }
        swaps += calSwaps(graph, visited, i);
    }
    return swaps;
};

const calSwaps = (graph, visited, begin) => {
    if (graph[begin].length === 0) {
        visited[begin] = true;
        return 0;
    }
    if (graph[begin][0] === graph[begin][1]) {
        visited[begin] = true;
        visited[graph[begin][0]] = true;
        return 1;
    }
    let swaps = -1;
    let lastNode = -1;
    let node = begin;
    do {
        visited[node] = true;
        ++swaps;
        let next = graph[node][0] === lastNode ? graph[node][1] : graph[node][0];
        lastNode = node;
        node = next;
    } while (node !== begin);
    return swaps;
}