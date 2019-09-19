// Return any binary tree that matches the given preorder and postorder traversals.
// Values in the traversals pre and post are distinct positive integers.

// Example 1:
// Input: pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
// Output: [1,2,3,4,5,6,7]

// Note:
// 1 <= pre.length == post.length <= 30
// pre[] and post[] are both permutations of 1, 2, ..., pre.length.
// It is guaranteed an answer exists. If there exists multiple answers, you can return any of them.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = (pre, post) => {
    let i = 0, j = 0;   
    const solve = (root) => {
        if (i >= pre.length) return;
        if (root.val == post[j]) return;
        if (pre[i] == post[j]){
            if (root.left == null) root.left = new TreeNode(pre[i++]);
            else if (root.right == null) root.right = new TreeNode(pre[i++]);
            j++;
            return;
        } else {
            if (root.left == null){
                root.left = new TreeNode(pre[i++]);
                solve(root.left);
                solve(root.left);
                j++
            } else {
                root.right = new TreeNode(pre[i++]);
                solve(root.right);
                solve(root.right);
                j++;
            }
        }            
    };
    let root = new TreeNode(pre[i++]);
    solve(root);
    solve(root);
    return root;
};