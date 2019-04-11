// Two elements of a binary search tree (BST) are swapped by mistake.
// Recover the tree without changing its structure.

// Example 1:
// Input: [1,3,null,null,2]

//    1
//   /
//  3
//   \
//    2
// Output: [3,1,null,null,2]
//    3
//   /
//  1
//   \
//    2

// Example 2:
// Input: [3,1,4,null,null,2]
//   3
//  / \
// 1   4
//    /
//   2
// Output: [2,1,4,null,null,3]
//   2
//  / \
// 1   4
//    /
//   3

// Follow up:
// A solution using O(n) space is pretty straight forward.
// Could you devise a constant space solution?

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
var recoverTree = (root) => {
    let node1 = null;
    let node2 = null;
    
    let prev = new TreeNode(-Number.MAX_VALUE);
    var inorder = node => {
        if (!node) return;
        
        inorder(node.left);
        if (prev.val > node.val) {
            if (!node1) node1 = prev;
            node2 = node;
        }
        prev = node;
        inorder(node.right);
    }
    
    inorder(root);
    [node1.val, node2.val] = [node2.val, node1.val];
};