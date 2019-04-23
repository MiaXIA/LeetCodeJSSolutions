// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
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
var levelOrder = (root) => {
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
 * @return {number[][]}
 */
var levelOrder = (root) => {
    if (!root) return [];
    const queue = [root];
    const r = [];
    while (queue.length > 0) {
        let len = queue.length;
        const _r = [];
        
        while (len--) {
            const node = queue.shift();
            _r.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        r.push(_r);
    }
    return r;
};