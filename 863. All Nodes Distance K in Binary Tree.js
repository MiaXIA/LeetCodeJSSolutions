// We are given a binary tree (with root node root), a target node, and an integer value K.
// Return a list of the values of all nodes that have a distance K from the target node.  The answer can be returned in any order.

// Example 1:
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2
// Output: [7,4,1]
// Explanation: 
// The nodes that are a distance 2 from the target node (with value 5)
// have values 7, 4, and 1.
// Note that the inputs "root" and "target" are actually TreeNodes.
// The descriptions of the inputs above are just serializations of these objects.
 
// Note:
// The given tree is non-empty.
// Each node in the tree has unique values 0 <= node.val <= 500.
// The target node is a node in the tree.
// 0 <= K <= 1000.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = (root, target, K) => {
    let res = new Array();
    const dist = (root,k) => {
        if (root == null || k < 0) return;
        if (k == 0) {
            res.push(root.val);
            return;
        }
        dist(root.left, k - 1);
        dist(root.right, k - 1);            
    };
    
    let path=new Array();
    const find = (root,target) => {    
        if (root == null) return 0;
        if (root.val == target.val) return 1;
        path.push(root.left)
        if (find(root.left, target) == 1) return 1;
        path.pop();
        path.push(root.right);
        if (find(root.right, target) == 1) return 1;
        path.pop();
        return 0;
    };
    
    find(root,target);
    path.unshift(root);
    let prev = null;
    while (K >= 0 && path.length > 0){
        let node = path.pop();        
        if (prev != null){            
            if (node.left && node.left.val == prev.val) node.left = null;
            else node.right = null;
        }
        dist(node, K);
        K--;
        prev = node;
    }
    return res;
};