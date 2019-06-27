// Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

// Example:
// Input:
//    1
//     \
//      3
//     /
//    2
// Output:
// 1
// Explanation:
// The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
 
// Note: There are at least two nodes in this BST.

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
var getMinimumDifference = (root) => {
    const res = [];
    const inorder = node => {
        if (!node) return;
        inorder(node.left);
        res.push(node.val);
        inorder(node.right);
    }
    inorder(root);
    
    let min = Infinity;
    for (let i = 0; i < res.length - 1; i++) {
        if (res[i + 1] - res[i] < min) min = res[i + 1] - res[i];
    }
    return min;
};