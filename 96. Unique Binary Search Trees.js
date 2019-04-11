// Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

// Example:
// Input: 3
// Output: 5
// Explanation:
// Given n = 3, there are a total of 5 unique BST's:
//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = (n, memo = {}) => {
    if (n <=1 ) return 1;
    let res = 0;
    
    const recurse = (i, n) => {
        const leftNums = i - 1;
        const rightNums = n - i;
        
        const leftTrees = memo[leftNums] || numTrees(leftNums, memo);
        const rightTrees = memo[rightNums] || numTrees(rightNums, memo);
        
        if (!memo[leftNums]) memo[leftNums] = leftTrees;
        if (!memo[rightNums]) memo[rightNums] = rightTrees;
        
        res += leftTrees * rightTrees;
    }
    for (let i = 1; i <= n; i += 1) recurse(i, n);
    return res;
};