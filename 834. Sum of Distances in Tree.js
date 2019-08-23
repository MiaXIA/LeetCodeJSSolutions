// An undirected, connected tree with N nodes labelled 0...N-1 and N-1 edges are given.
// The ith edge connects nodes edges[i][0] and edges[i][1] together.
// Return a list ans, where ans[i] is the sum of the distances between node i and all other nodes.

// Example 1:
// Input: N = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
// Output: [8,12,6,10,10,10]
// Explanation: 
// Here is a diagram of the given tree:
//   0
//  / \
// 1   2
//    /|\
//   3 4 5
// We can see that dist(0,1) + dist(0,2) + dist(0,3) + dist(0,4) + dist(0,5)
// equals 1 + 1 + 2 + 2 + 2 = 8.  Hence, answer[0] = 8, and so on.

// Note: 1 <= N <= 10000

/**
 * @param {number} N
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = (N, edges) => {
    g = new Map();
    for (let i = 0; i < N; i++) {
        g.set(i, []);
    }
    for (let i = 0; i < edges.length; i++) {
        g.get(edges[i][0]).push(edges[i][1]);
        g.get(edges[i][1]).push(edges[i][0]);
    }
    let dp = Array(N).fill(0);
    let nodes = Array(N).fill(0);
    dfs(dp, nodes, g, 0, -1);
    let res = Array(N).fill(0);
    res[0] = dp[0]; 
    dfs2(dp, nodes, g, 0, -1, res[0], res, N);
    return res; 
}
    
const dfs = (dp, nodes, g, start, father) => {
    nodes[start] = 1;
    let neis = g.get(start);
        
    for (let i = 0; i < neis.length; i++) {
        if (neis[i] == father) {
            continue;
        }
        dfs(dp, nodes, g, neis[i], start);
        nodes[start] += nodes[neis[i]];
        dp[start] += dp[neis[i]] + nodes[neis[i]] ;
    }
}
    
const dfs2 = (dp, nodes, g, start, father, len, res, N) => {
    let neis = g.get(start);
    for (let i = 0; i < neis.length; i++) { 
        if (g.get(start)[i] == father) {
            continue;
        }
        let j = neis[i];
        res[j] = dp[j] + (len - dp[j] - nodes[j]) + (N - nodes[j]);
        dfs2(dp, nodes, g, j, start, res[j], res, N);
    }
}