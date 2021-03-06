// Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.
// The length of path between two nodes is represented by the number of edges between them.

// Example 1:
// Input:
//               5
//              / \
//             4   5
//            / \   \
//           1   1   5
// Output: 2

// Example 2:
// Input:
//               1
//              / \
//             4   5
//            / \   \
//           4   4   5
// Output: 2

// Note: The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000.

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
var longestUnivaluePath = (root) => {
    if (!root) return 0;
    let maxLength = 0;
    
    const getLength = (node, parent) => {
        if (!node) return 0;
        let l = getLength(node.left, node.val);
        let r = getLength(node.right, node.val);
        if (l + r > maxLength) maxLength = l + r;
        return node.val === parent ? Math.max(l, r) + 1 : 0;
    }
    
    getLength(root, root.val);
    return maxLength;
};