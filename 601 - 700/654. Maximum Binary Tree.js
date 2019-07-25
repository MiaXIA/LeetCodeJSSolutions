// Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:
// The root is the maximum number in the array.
// The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
// The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
// Construct the maximum tree by the given array and output the root node of this tree.

// Example 1:
// Input: [3,2,1,6,0,5]
// Output: return the tree root node representing the following tree:
//       6
//     /   \
//    3     5
//     \    / 
//      2  0   
//        \
//         1
// Note:
// The size of the given array will be in the range [1,1000].

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
const findMaxIndex = (nums) => {
    let maxIndex = 0, max = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        if (curr > max) {
            maxIndex = i;
            max = curr;
        }
    }
    return maxIndex;
}

var constructMaximumBinaryTree = (nums) => {
    if (!nums || nums.length == 0) return null;
    
    let maxIndex = findMaxIndex(nums);
    let max = nums[maxIndex];
    let root = new TreeNode(max);
    let left = nums.slice(0, maxIndex);
    let right = nums.slice(maxIndex + 1, nums.length);
    
    root.left = constructMaximumBinaryTree(left);
    root.right = constructMaximumBinaryTree(right);

    return root;
};