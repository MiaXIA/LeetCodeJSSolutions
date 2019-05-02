// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example:
// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:
//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const helper = (root, level, r) => {
    if (root === null) return;
    if (r[level]) r[level].push(root.val);
    else r.push([root.val]);
    helper(root.left, level + 1, r);
    helper(root.right, level + 1, r);
}

var rightSideView = (root) => {
    const r = [];
    helper(root, 0, r);
    let res = [];
    for (const a of r) res.push(a.pop());
    return res;
};