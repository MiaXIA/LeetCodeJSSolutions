// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:
// Given the sorted array: [-10,-3,0,5,9],
// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
//       0
//      / \
//    -3   9
//    /   /
//  -10  5

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = (nums) => {
    const sort = (nums, from, to) => {
        if (from > to) return null;
        let mid = Math.ceil(from + ((to - from) / 2));
        let node = new TreeNode(nums[mid]);
        
        node.left = sort(nums, from, mid - 1);
        node.right = sort(nums, mid + 1, to);
        
        return node;
    }
    
    return sort(nums, 0, nums.length - 1);
};