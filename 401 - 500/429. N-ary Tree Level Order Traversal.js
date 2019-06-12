// Given an n-ary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
// For example, given a 3-ary tree:
//    1
// /  |  \
// 3  2  4 
// /\
// 5 6
// We should return its level order traversal:
// [
//      [1],
//      [3,2,4],
//      [5,6]
// ]

// Note:
// The depth of the tree is at most 1000.
// The total number of nodes is at most 5000.

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = (root) => {
    if (root === null) return [];
    
    var queue = [], res = [];
    queue.push(root);
    while (queue.length > 0) {
        var tempArr = [];
        var length = queue.length;
        for (var i = 0; i < length; i++) {
            var tempNode = new Node();
            tempNode = queue.shift();
            for (let n of tempNode.children) queue.push(n);
            tempArr.push(tempNode.val);
        }
        res.push(tempArr);
    }
    return res;
};