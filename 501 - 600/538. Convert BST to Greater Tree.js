// Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

// Example:
// Input: The root of a Binary Search Tree like this:
//               5
//             /   \
//            2     13
// Output: The root of a Greater Tree like this:
//              18
//             /   \
//           20     13

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = (root) => {
    const res = [];
    const inorder = node => {
        if (!node) return;
        inorder(node.left);
        res.push(node);
        inorder(node.right);
    }
    inorder(root);
    
    for (let i = res.length - 1; i > 0; i--) res[i - 1].val += res[i].val;
    
    return root;
};