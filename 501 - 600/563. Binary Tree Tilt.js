// Given a binary tree, return the tilt of the whole tree.
// The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values. Null node has tilt 0.
// The tilt of the whole tree is defined as the sum of all nodes' tilt.

// Example:
// Input: 
//          1
//        /   \
//       2     3
// Output: 1
// Explanation: 
// Tilt of node 2 : 0
// Tilt of node 3 : 0
// Tilt of node 1 : |2-3| = 1
// Tilt of binary tree : 0 + 0 + 1 = 1
// Note:
// The sum of node values in any subtree won't exceed the range of 32-bit integer.
// All the tilt values won't exceed the range of 32-bit integer.

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
var findTilt = (root) => {
    const map = new Map();
    if (!root) return 0;
    
    const stack = [root];
    const set = new Set();
    const tilts = [];
    
    while (stack.length) {
        const node = stack.pop();
        
        if (set.has(node)) {
            const lVal = (node.left && node.left.val) || 0;
            const rVal = (node.right && node.right.val) || 0;
            node.val += lVal + rVal;
            tilts.push(Math.abs(lVal - rVal));
        } else {
            stack.push(node);
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
            set.add(node);
        }
    }
    return tilts.reduce((acc, tilt) => acc + tilt);
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
 * @return {number}
 */
const sumTree = root => {
    if (!root) return 0;
    return sumTree(root.left) + sumTree(root.right) + root.val;
}

var findTilt = (root) => {
    if (!root) return 0;
    
    return findTilt(root.left) + findTilt(root.right) + Math.abs(sumTree(root.left) - sumTree(root.right));
};