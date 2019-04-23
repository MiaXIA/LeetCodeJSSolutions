// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = (root) => {
    let max = -1;
    const getMaxLevel = (node, level = 0) => {
        if (node) {
            if (level > max) max = level;
            getMaxLevel(node.left, level + 1);
            getMaxLevel(node.right, level + 1);
        }
    }
    getMaxLevel(root);
    return max + 1;
};