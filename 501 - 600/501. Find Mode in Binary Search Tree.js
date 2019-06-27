// Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.
// Assume a BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.
 
// For example:
// Given BST [1,null,2,2],
//    1
//     \
//      2
//     /
//    2
// return [2].
// Note: If a tree has more than one mode, you can return them in any order.
// Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).

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
var findMode = (root) => {
    const map = {};
    let max = -Infinity;
    const tree = node => {
        if (node) {
            map[node.val] = (map[node.val] || 0) + 1;
            if (map[node.val] > max) max = map[node.val];
            tree(node.left);
            tree(node.right);
        }
    }
    tree(root);
    
    const res = [];
    Object.keys(map).forEach(k => {
        if (map[k] === max) res.push(+k);
    });
    return res;
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
var findMode = (root) => {
    let max = -Infinity;
    let prev = null;
    let num = 1;
    const res = [];
    const tree = node => {
        if (!node) return;
        tree(node.left);
        if (prev) num = prev.val === node.val ? num + 1 : 1;
        if (num >= max) {
            if (num > max) res.length = 0;
            res.push(node.val);
            max = num;
        }
        prev = node;
        tree(node.right);
    }
    tree(root);
    return res;
};