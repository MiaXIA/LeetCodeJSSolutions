// Given a binary tree, return all duplicate subtrees. For each kind of duplicate subtrees, you only need to return the root node of any one of them.
// Two trees are duplicate if they have the same structure with same node values.

// Example 1:
//         1
//        / \
//       2   3
//      /   / \
//     4   2   4
//        /
//       4
// The following are two duplicate subtrees:
//       2
//      /
//     4
// and
//     4
// Therefore, you need to return above trees' root in the form of a list.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = (root) => {
    let map = new Map();
    let trv = function(root) {
        if (root === null) return '$';
        let l = trv(root.left);
        let r = trv(root.right);
        
        let str = `${root.val},${l},${r}`;
        let t = map.get(str) || { freq: 0, root: null };
        t.freq += 1;
        t.root = root;
        map.set(str, t);
        
        return str;
    };
    
    trv(root);
    let res = new Array();
    for (let val of map.values()) {
        if (val.freq > 1) res.push(val.root);
    }
    return res;
};