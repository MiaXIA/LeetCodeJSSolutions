// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

// Example 1:
// Given tree s:
//      3
//     / \
//    4   5
//   / \
//  1   2
// Given tree t:
//    4 
//   / \
//  1   2
// Return true, because t has the same structure and node values with a subtree of s.

// Example 2:
// Given tree s:
//      3
//     / \
//    4   5
//   / \
//  1   2
//     /
//    0
// Given tree t:
//    4
//   / \
//  1   2
// Return false.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = (s, t) => {
    const isSame = (n1, n2) => {
        if ((n1 && !n2) || (n2 && !n1)) return false;
        if (!n1 && !n2) return true;
        return n1.val === n2.val && isSame(n1.left, n2.left) && isSame(n1.right, n2.right);
    }
    
    let flag = false;
    const compare = node => {
        if (flag || !node) return;
        if (isSame(node, t)) flag = true;
        else {
            compare(node.left);
            compare(node.right);
        }
    }
    compare(s);
    return flag;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = (s, t) => {
    const toString = node => {
        if (!node) return '';
        return `+${node.val},${toString(node.left)},${toString(node.right)}-`;
    }
    return toString(s).includes(toString(t));
};