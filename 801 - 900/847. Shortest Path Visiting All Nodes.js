// An undirected, connected graph of N nodes (labeled 0, 1, 2, ..., N-1) is given as graph.
// graph.length = N, and j != i is in the list graph[i] exactly once, if and only if nodes i and j are connected.
// Return the length of the shortest path that visits every node. You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.

// Example 1:
// Input: [[1,2,3],[0],[0],[0]]
// Output: 4
// Explanation: One possible path is [1,0,2,0,3]

// Example 2:
// Input: [[1],[0,2,4],[1,3,4],[2],[1,2]]
// Output: 4
// Explanation: One possible path is [0,1,4,2,3]
 
// Note:
// 1 <= graph.length <= 12
// 0 <= graph[i].length < graph.length

/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = (graph) => {
    let weights = new Map();
    let currentIndex = 0;
    let minLength = Infinity;
    for (let n = 0; n < graph.length; n++) {
      weights.set(n, {weight: 0, neighbour: graph[n].length});
    }
    let smallestStarting = [];
    weights.forEach(function (value, key) {
      if (value.neighbour < minLength) {
        smallestStarting = [];
        smallestStarting.push(key);
        minLength = value.neighbour;
      } else if (value.neighbour === minLength) {
        smallestStarting.push(key);
      }
    });
    let allPaths = [];
    for (let m = 0; m < smallestStarting.length; m++) {
      let path = [];
      let visitSet = new Set();
      currentIndex = smallestStarting[m];
      let blacklist = new Set();
      while (visitSet.size !== graph.length) {
        let currentWeight = weights.get(currentIndex);
        weights.set(currentIndex, { weight: currentWeight.weight + 1, neighbour: currentWeight.neighbour });
        visitSet.add(currentIndex);
        path.push(currentIndex);
        let candidates = graph[currentIndex];
        let lowestWeight = Infinity;
        let smallestCount = [];
        if (candidates.length === 1) {
          blacklist.add(currentIndex);
          currentIndex = candidates[0];
        } else {
          let blackListBool = true;
          for (let i = 0; i < candidates.length; i++) {
            if (blacklist.has(candidates[i])) continue;
            if (weights.get(candidates[i]).weight < lowestWeight) {
              smallestCount = [];
              smallestCount.push(candidates[i]);
              lowestWeight = weights.get(candidates[i]).weight;
            } else if (weights.get(candidates[i]).weight === lowestWeight) {
              smallestCount.push(candidates[i]);
            }
            if (weights.get(candidates[i]).weight === 0) {
              blackListBool = false;
            }
          }
          if (blackListBool) blacklist.add(currentIndex);
          if (smallestCount.length > 1) {
            let minLength = Infinity;
            for (let j = 0; j < smallestCount.length; j++) {
              if (blacklist.has(smallestCount[j])) continue;
              if (minLength > weights.get(smallestCount[j]).neighbour) {
                minLength = weights.get(smallestCount[j]).neighbour;
                currentIndex = smallestCount[j];
              }
            }
          } else {
            currentIndex = smallestCount[0];
          }
        }
      }
      allPaths.push(path.length);
      for (let n = 0; n < graph.length; n++) {
        weights.set(n, { weight: 0, neighbour: graph[n].length });
      }
    }
    return Math.min.apply(null, allPaths) - 1;
  }