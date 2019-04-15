// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given
// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:
//     3
//    / \
//   9  20
//     /  \
//    15   7

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = (preorder, inorder) => {
    const tree = (_pre, _in) => {
        if (_pre.length === 0) return null;
        const node = new TreeNode(_pre[0]);
        const index = _in.indexOf(_pre[0]);
        node.left = tree(_pre.slice(1, index + 1), _in.slice(0, index));
        node.right = tree(_pre.slice(index + 1), _in.slice(index + 1));
        return node;
    }
    const root = tree(preorder, inorder);
    return root;
};