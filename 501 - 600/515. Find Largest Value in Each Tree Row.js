// You need to find the largest value in each row of a binary tree.

// Example:
// Input: 
//           1
//          / \
//         3   2
//        / \   \  
//       5   3   9 
// Output: [1, 3, 9]

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
var largestValues = (root) => {
    var res = [];
    if (!root) return res;
    
    var queue = [root];
    while (queue.length > 0) {
        var curMax = Number.MIN_SAFE_INTEGER;
        var currLen = queue.length;
        
        for (var i = 0; i < currLen; i++) {
            var node = queue.shift();
            curMax = Math.max(curMax, node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(curMax);
    }
    return res;
};