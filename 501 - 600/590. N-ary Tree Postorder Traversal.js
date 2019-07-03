// Given an n-ary tree, return the postorder traversal of its nodes' values.
// For example, given a 3-ary tree:
//     1
//   / | \
//  3  2 4
// / \
// 5 6
// Return its postorder traversal as: [5,6,3,2,4,1].

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
var postorder = (root) => {
    var res = [];
    const iterative = root => {
        let queue = [root];
        while (queue.length > 0) {
            node = queue.pop();
            if (node === null) continue;
            res.push(node.val);
            for (let child of node.children) queue.push(child);
        }
        res.reverse();
    }
    iterative(root);
    return res;
};

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
var postorder = (root) => {
    var res = [];
    const recursive = root => {
        if (root === null) return;
        for (let child of root.children) recursive(child);
        res.push(root.val);
    }
    recursive(root);
    return res;
};