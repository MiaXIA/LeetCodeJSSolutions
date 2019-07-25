// In this problem, a rooted tree is a directed graph such that, there is exactly one node (the root) for which all other nodes are descendants of this node, plus every node has exactly one parent, except for the root node which has no parents.
// The given input is a directed graph that started as a rooted tree with N nodes (with distinct values 1, 2, ..., N), with one additional directed edge added. The added edge has two different vertices chosen from 1 to N, and was not an edge that already existed.
// The resulting graph is given as a 2D-array of edges. Each element of edges is a pair [u, v] that represents a directed edge connecting nodes u and v, where u is a parent of child v.
// Return an edge that can be removed so that the resulting graph is a rooted tree of N nodes. If there are multiple answers, return the answer that occurs last in the given 2D-array.

// Example 1:
// Input: [[1,2], [1,3], [2,3]]
// Output: [2,3]
// Explanation: The given directed graph will be like this:
//   1
//  / \
// v   v
// 2-->3

// Example 2:
// Input: [[1,2], [2,3], [3,4], [4,1], [1,5]]
// Output: [4,1]
// Explanation: The given directed graph will be like this:
// 5 <- 1 -> 2
//      ^    |
//      |    v
//      4 <- 3

// Note:
// The size of the input 2D-array will be between 3 and 1000.
// Every integer represented in the 2D-array will be between 1 and N, where N is the size of the input array.

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = (edges) => {
    var nodes = {};
    var parent = {};
    var visited = {};
    let twoParentNode = null;
    for (let i = 0; i < edges.length; i++){
        let edge = edges[i];
        let fromNode = edge[0];
        let toNode = edge[1];
        
        if (!nodes[fromNode]){
            nodes[fromNode] = new Node(fromNode);
        }
        if (!nodes[toNode]){
            nodes[toNode] = new Node(toNode);
        }
        if (!visited[toNode]){
            visited[toNode] = fromNode;
            parent[toNode] = [fromNode];
            nodes[fromNode].children.push(toNode);
        }else if(visited[toNode]){
            twoParentNode = [];
            twoParentNode.push([visited[toNode], toNode])
            twoParentNode.push([fromNode, toNode])
            parent[toNode].push(fromNode);
        }
    }
    
    let loop = null;
    for (let i = 0; i < edges.length; i++){
        visited = {};
        let edge = edges[i];
        let currNode = edge[0];
        let val = null;
        if (parent[currNode]){
            val = dfs(currNode, parent[currNode][0], visited, nodes, parent);
            if (parent[currNode].length == 2 && val == null){
                 val = dfs(currNode, parent[currNode][1], visited, nodes, parent);
            }
            if (val != null){
                loop = val;
            }
        }
    }
    
    if (loop == null){
        return twoParentNode.pop();
    } else {
        if(twoParentNode){
            let p1 = twoParentNode.pop();
            let p2 = twoParentNode.pop();
            for (var el of loop){
                if (el[0] == p1[0] && el[1] == p1[1]){
                    return p1;
                } else if (el[0] == p2[0] && el[1] == p2[1]){
                    return p2;
                }
            }
        } else {
            return loop[0];
        }
    }    
    return null;
};

const dfs = (curr, from, visited, nodes) => {
    let loop = [];
    if (visited[curr]){
        loop.push([from,curr])
        return loop;
    }

    let node = nodes[curr];
    visited[curr] = 1;
    
    let foundLoop = false;

    if (node.children.length != 0){
        let val = null;
        for (let child of node.children){
            let val = dfs(child, curr, visited, nodes);
            if (val != null){
                foundLoop = true;
                loop.push([from, curr])
                loop = loop.concat(val);
                break;
            }
        }
    }
   
    if (!foundLoop){
        loop = null
    }
    return loop;
}

var Node = function(_val){
    this.val = _val;
    this.children = [];
}