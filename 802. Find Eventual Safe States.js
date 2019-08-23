// In a directed graph, we start at some node and every turn, walk along a directed edge of the graph.  If we reach a node that is terminal (that is, it has no outgoing directed edges), we stop.
// Now, say our starting node is eventually safe if and only if we must eventually walk to a terminal node.  More specifically, there exists a natural number K so that for any choice of where to walk, we must have stopped at a terminal node in less than K steps.
// Which nodes are eventually safe?  Return them as an array in sorted order.
// The directed graph has N nodes with labels 0, 1, ..., N-1, where N is the length of graph.  The graph is given in the following form: graph[i] is a list of labels j such that (i, j) is a directed edge of the graph.

// Example:
// Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
// Output: [2,4,5,6]
// Here is a diagram of the above graph.
// Illustration of graph

// Note:
// graph will have length at most 10000.
// The number of edges in the graph will not exceed 32000.
// Each graph[i] will be a sorted list of different integers, chosen within the range [0, graph.length - 1].

/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = (graph) => {
    let final = new Set();
    let nf = new Set();
    graph.map((item, index) => {
        if (item.length <= 0) final.add(index);
        else nf.add(index);
    });
    let oldSize = -1, count = 0;
    while (nf.size !== oldSize){
        oldSize = nf.size;        
        for (let item of [...nf]){
            count = 0;
            for (let node of graph[item]){
                if (!final.has(node)) break;
                count++;
            }
            if (count === graph[item].length){
                final.add(item);
                nf.delete(item);
            }
        }
    }
    return [...final].sort((a,b) => a - b);
};