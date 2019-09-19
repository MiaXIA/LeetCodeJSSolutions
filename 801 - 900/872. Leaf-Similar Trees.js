// Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.
// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
// Two binary trees are considered leaf-similar if their leaf value sequence is the same.
// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

// Note:
// Both of the given trees will have between 1 and 100 nodes.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = (root1, root2) => {
    const getLeaf = (root) => {
        let arr = [];
        if (!root) return;
        let p = root, stack = [];
        while (p || stack.length) {
            if (p) {
                stack.push(p);
                p = p.left;
            } else {
                p = stack.pop();
                if (!p.left && !p.right) {
                    arr.push(p.val);
                }
                p = p.right;
            }
        }
        return arr.join('');
    }
    return getLeaf(root1) === getLeaf(root2);
};