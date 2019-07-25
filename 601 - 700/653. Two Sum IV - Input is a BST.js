// Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

// Example 1:
// Input: 
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7
// Target = 9
// Output: True
 
// Example 2:
// Input: 
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7
// Target = 28
// Output: False

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = (root, k) => {
    if (root === null) return root;
    let res = {};
    let found = false;
    const inorder = head => {
        if (head === null) return;
        inorder(head.left);
        if (res[k - head.val] === undefined) res[head.val] = head.val;
        else {
            found = true;
            return;
        }
        inorder(head.right);
    }
    inorder(root);
    return found;
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = (root, k) => {
    if (root === null) return root;
    let map = {};
    let found = false;
    let queue = [root];
    while (queue.length > 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (map[k - node.val] === undefined) {
                map[node.val] = node.val;
            } else {
                found = true;
                break;
            }
            if (node.left !== null) { queue.push(node.left); }
            if (node.right !== null) { queue.push(node.right); }
        }
    }
    return found;
}