// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:
// Input:
//    1
//  /   \
// 2     3
//  \
//   5
// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = (root) => {
    const res = [];
    const treePath = (node, p) => {
        if (node) {
            p = p ? `${p}->${node.val}` : `${node.val}`;
            if (node.left || node.right) {
                treePath(node.left, p);
                treePath(node.right, p);
            } else res.push(p);
        }
    }
    treePath(root, '');
    return res;
};