// Given a binary tree, return the preorder traversal of its nodes' values.

// Example:
// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
// Output: [1,2,3]
// Follow up: Recursive solution is trivial, could you do it iteratively?

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = (root) => {
    const preOrder = (node, r) => {
        if (node) {
            r.push(node.val);
            preOrder(node.left, r);
            preOrder(node.right, r);
        }
    }
    const r = [];
    preOrder(root, r);
    return r;
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
 * @return {number[]}
 */
var preorderTraversal = (root) => {
    if (!root) return [];
    const queue = [root];
    const r = [];
    while (queue.length > 0) {
        const node = queue.shift();
        r.push(node.val);
        if (node.right) queue.unshift(node.right);
        if (node.left) queue.unshift(node.left);
    }
    return r;
};