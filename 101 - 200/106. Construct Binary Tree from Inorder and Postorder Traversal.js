// Given inorder and postorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given
// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = (inorder, postorder) => {
    let inMap = inorder.reduce((acc, v, i) => {acc[v] = i; return acc}, {});
    let last = postorder.length - 1;
    
    return (function build(l, r) {
        if (l >= r) return null;
        let cur = postorder[last];
        last--;
        let node = new TreeNode(cur);
        node.right = build(inMap[cur] + 1, r);
        node.left = build(l, inMap[cur]);
        return node;
    })(0, postorder.length);
};