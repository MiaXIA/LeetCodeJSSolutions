// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

// Note: A leaf is a node with no children.

// Example:
// Given the below binary tree and sum = 22,
//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \    / \
// 7    2  5   1
// Return:
// [
//    [5,4,11,2],
//    [5,8,4,5]
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = (root, sum) => {
    const r = [];
    const tree = (node, remain, arr=[]) => {
        if (node) {
            if (node.val === remain && !node.left && !node.right) {
                r.push(arr.concat([node.val]));
                return;
            }
            arr.push(node.val);
            tree(node.left, remain - node.val, arr);
            tree(node.right, remain - node.val, arr);
            arr.pop();
        }
    }
    tree(root, sum);
    return r;
};