// Given an n-ary tree, return the preorder traversal of its nodes' values.
// For example, given a 3-ary tree:
//   1
// / | \
// 3 2 4
// /\
// 5 6 
// Return its preorder traversal as: [1,3,5,6,2,4].

// Note:
// Recursive solution is trivial, could you do it iteratively?

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = (root) => {
    const stack = [];
    const putPreorder = node => {
        if (!node) return;
        stack.push(node.val);
        for (let child in node.children) putPreorder(node.children[child]);
    };
    
    putPreorder(root);
    return stack;
};