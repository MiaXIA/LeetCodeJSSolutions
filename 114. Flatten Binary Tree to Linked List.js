// Given a binary tree, flatten it to a linked list in-place.

// For example, given the following tree:
//     1
//    / \
//   2   5
//  / \   \
// 3   4   6
// The flattened tree should look like:
// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//           6

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = (root) => {
    const tree = (node) => {
        if (node) {
            const left = node.left;
            const right = node.right;
            if (left && right) {
                node.right = tree(left);
                node.left = null;
                let rightNode = node;
                while (rightNode.right) {
                    rightNode = rightNode.right;
                }
                rightNode.right = tree(right);
            } else if (left) {
                node.right = tree(left);
                node.left = null;
            } else {
                tree(right);
            }
        }
        return node;
    }
    
    tree(root);
};
