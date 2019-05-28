// Given an integer array nums, return the number of range sums that lie in [lower, upper] inclusive.
// Range sum S(i, j) is defined as the sum of the elements in nums between indices i and j (i ≤ j), inclusive.

// Note:
// A naive algorithm of O(n2) is trivial. You MUST do better than that.

// Example:
// Input: nums = [-2,5,-1], lower = -2, upper = 2,
// Output: 3 
// Explanation: The three ranges are : [0,0], [2,2], [0,2] and their respective sums are: -2, -1, 2.

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
function Node(val) {
    this.val = val;
    this.count = 1;
    this.leftCount = 0;
    this.rightCount = 0;
    
    this.left = null;
    this.right = null;
}

const insertNode = (node, val) => {
    if (node.val === val) node.count += 1;
    else if (node.val > val) {
        node.leftCount += 1;
        if (!node.left) node.left = new Node(val);
        else insertNode(node.left, val);
    } else {
        node.rightCount += 1;
        if (!node.right) node.right = new Node(val);
        else insertNode(node.right, val);
    }
}

const countSmallerRangeCount = (node, val) => {
    if (!node) return 0;
    if (node.val === val) return node.leftCount;
    if (node.val > val) return countSmallerRangeCount(node.left, val);
    return node.count + node.leftCount + countSmallerRangeCount(node.right, val);
}

const countLargerRangeCount = (node, val) => {
    if (!node) return 0;
    if (node.val === val) return node.rightCount;
    if (node.val < val) return countLargerRangeCount(node.right, val);
    return node.count + node.rightCount + countLargerRangeCount(node.left, val);
}

const countRangeCount = (root, min, max) => {
    const total = root.count + root.leftCount + root.rightCount;
    const left = countSmallerRangeCount(root, min);
    const right = countLargerRangeCount(root, max);
    return total - left - right;
}

var countRangeSum = (nums, lower, upper) => {
    let count = 0;
    const sums = [];
    const root = new Node(0);
    
    for (const num of nums) {
        const sum = sums.length ? num + sums.slice(-1)[0] : num;
        sums.push(sum);
        const min = sum - upper;
        const max = sum - lower;
        count += countRangeCount(root, min, max);
        insertNode(root, sum);
    }
    return count;
};