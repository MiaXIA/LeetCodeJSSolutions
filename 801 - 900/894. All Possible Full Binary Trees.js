// A full binary tree is a binary tree where each node has exactly 0 or 2 children.
// Return a list of all possible full binary trees with N nodes.  Each element of the answer is the root node of one possible tree.
// Each node of each tree in the answer must have node.val = 0.
// You may return the final list of trees in any order.

// Example 1:
// Input: 7
// Output: [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
// Explanation:

// Note:
// 1 <= N <= 20

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
let map=new Map();
var allPossibleFBT = (N) => {
    if (map.has(N)) return map.get(N);
    let root = new TreeNode(0);
    if (N == 1) return [root];
    let k = 1;
    let left = [];
    let right = [];
    let res = [];
    while ((N - (2 * k)) > 0){
        left = allPossibleFBT((N) - (2 * k));
        right = allPossibleFBT((N - (N - (2 * k))) - 1);
        for (let tree of left){
            for (let tree2 of right){
                root.left = tree;
                root.right = tree2;
                res.push(JSON.parse(JSON.stringify(root)));
            }
        }
        k++;
    }
    map.set(N,res);
    return res;
};