// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
// Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary search tree can be serialized to a string and this string can be deserialized to the original tree structure.
// The encoded string should be as compact as possible.
// Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serializeHelper = (node, res) => {
    if (node) {
        res.push(node.val);
        serializeHelper(node.left, res);
        serializeHelper(node.right, res);
    }
}

var serialize = (root) => {
    if (root === null) return '';
    let res = [];
    serializeHelper(root, res);
    return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserializeHelper = (array, min, max) => {
    if (array.length === 0) return null;
    let val = +array[0];
    if (val < min || val > max) return null;
    array.shift();
    let root = new TreeNode(val);
    root.left = deserializeHelper(array, min, val);
    root.right = deserializeHelper(array, val, max);
    return root;
}

var deserialize = (data) => {
    if (!data) return null;
    const array = data.split(',');
    return deserializeHelper(array, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */