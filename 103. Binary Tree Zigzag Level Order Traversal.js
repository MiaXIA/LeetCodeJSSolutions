// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = (root) => {
    const r = [];
    const levelOrder = (node, level = 0) => {
        if (node) {
            r[level] = r[level] || [];
            r[level].push(node.val);
            levelOrder(node.left, level + 1);
            levelOrder(node.right, level + 1);
        }
    }
    levelOrder(root);
    for (let i = 0; i < r.length; i++) {
        if (i % 2) r[i] = r[i].reverse();
    }
    return r;
};
