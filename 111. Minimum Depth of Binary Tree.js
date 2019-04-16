// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its minimum depth = 2.

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
var minDepth = (root) => {
    if (!root) return 0;
    const left = minDepth(root.left);
    const right = minDepth(root.right);
    return (left === 0 || right === 0) ? left + right + 1 : Math.min(left, right) + 1;
};

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
var minDepth = (root) => {
    let minLevel = null;
    const tree = (node, level = 0) => {
        if (node) {
            if (node.left && node.right) {
                tree(node.left, level + 1);
                tree(node.right, level + 1);
            } else if (node.left) {
                tree(node.left, level + 1);
            } else if (node.right) {
                tree(node.right, level + 1);
            } else {
                if (minLevel === null || level < minLevel) minLevel = level;
            }
        }
    }
    if (!root) return 0;
    tree(root);
    
    return minLevel + 1;
};