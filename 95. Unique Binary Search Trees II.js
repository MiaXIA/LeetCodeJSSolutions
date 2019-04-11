// Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.

// Example:
// Input: 3
// Output:
// [
//   [1,null,3,2],
//   [3,2,null,1],
//   [3,1,null,null,2],
//   [2,1,3],
//   [1,null,2,null,3]
// ]
// Explanation:
// The above output corresponds to the 5 unique BST's shown below:

//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = (n) => {
    if (n < 1) return [];
    const dp = [...Array(n + 1)].map(r => Array(n + 1));
    
    var generate = (s, e) => {
        if (s > e) return [null];
        if (dp[s][e]) return dp[s][e];
        
        const res = [];
        for (let root = s; root <= e; root++) {
            for (let left of generate(s, root - 1)) {
                for (let right of generate(root + 1, e)) {
                    const newTree = new TreeNode(root);
                    newTree.left = left;
                    newTree.right = right;
                    res.push(newTree);
                }
            }
        }
        dp[s][e] = res;
        return res;
    }
    
    return generate(1, n);
};