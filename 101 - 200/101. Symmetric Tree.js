// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// But the following [1,2,2,null,3,null,3] is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3

// Note:
// Bonus points if you could solve it both recursively and iteratively.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = (root) => {
    const r = [];
    const gen = (node, level = 0) => {
        if (node) {
            r[level] = r[level] || [];
            r[level].push(node.val);
            gen(node.left, level + 1);
            gen(node.right, level + 1);
        } else {
            r[level] = r[level] || [];
            r[level].push(null);
        }
    }
    
    gen(root);
    if (r.length === 0 || r.length === 1) return true;
    for (let i = 1; i < r.length; i++) {
        for (let j = 0; j < r[i].length / 2; j++) {
            if (r[i][j] !== r[i][r[i].length - j - 1]) return false;
        }
    }
    return true;
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
 * @return {boolean}
 */
var isSymmetric = (root) => {
    let flag = true;
    const isSame = (_p, _q) => {
        if (!flag) return;
        if ((!_p && _q) || (!_q && _p)) flag = false;
        if (_p && _q) {
            if (_p.val !== _q.val) flag = false;
            else {
                isSame(_p.left, _q.right);
                isSame(_p.right, _q.left);
            }
        }
    }
    if (!root) return true;
    if (!root.left && !root.right) return true;
    isSame(root.left, root.right);
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = (root) => {
    if (!root || (!root.left && !root.right)) return true;
    if (!root.left || !root.right) return false;
    
    const left = [root.left];
    const right = [root.right];
    
    while (left.length > 0) {
        const leftNode = left.pop();
        const rightNode = right.pop();
        if (leftNode.val !== rightNode.val) return false;
        
        if (leftNode.left && rightNode.right) {
            left.push(leftNode.left);
            right.push(rightNode.right);
        } else if (leftNode.left || rightNode.right) return false;
        
        if (leftNode.right && rightNode.left) {
            left.push(leftNode.right);
            right.push(rightNode.left);
        } else if (leftNode.right || rightNode.left) return false;
    }
    return true;
};