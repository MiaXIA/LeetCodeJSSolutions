// Given a binary tree, return the postorder traversal of its nodes' values.

// Example:
// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
// Output: [3,2,1]
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
var postorderTraversal = (root) => {
    const postOrder = (node, r) => {
        if (node) {
            postOrder(node.left, r);
            postOrder(node.right, r);
            r.push(node.val);
        }
    }
    const r = [];
    postOrder(root, r);
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
var postorderTraversal = (root) => {
    if (!root) return [];
    const queue = [root];
    const r = [];
    
    while (queue.length > 0) {
        const node = queue.shift();
        r.unshift(node.val);
        if (node.left) queue.unshift(node.left);
        if (node.right) queue.unshift(node.right);
    }
    return r;
};
