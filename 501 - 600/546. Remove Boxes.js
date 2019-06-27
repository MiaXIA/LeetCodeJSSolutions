// Given several boxes with different colors represented by different positive numbers. 
// You may experience several rounds to remove boxes until there is no box left. Each time you can choose some continuous boxes with the same color (composed of k boxes, k >= 1), remove them and get k*k points.
// Find the maximum points you can get.

// Example 1:
// Input:
// [1, 3, 2, 2, 2, 3, 4, 3, 1]
// Output:
// 23
// Explanation:
// [1, 3, 2, 2, 2, 3, 4, 3, 1] 
// ----> [1, 3, 3, 4, 3, 1] (3*3=9 points) 
// ----> [1, 3, 3, 3, 1] (1*1=1 points) 
// ----> [1, 1] (3*3=9 points) 
// ----> [] (2*2=4 points)
// Note: The number of boxes n would not exceed 100.

/**
 * @param {number[]} boxes
 * @return {number}
 */
const get = (boxes, memo, i, j, k) => {
    if (i > j) return 0;
    if (memo[i][j][k] !== undefined) return memo[i][j][k];
    
    var max = get(boxes, memo, i, j - 1, 0) + (k + 1) * (k + 1);
    for (var m = i; m < j; m++) {
        if (boxes[j] === boxes[m]) {
            max = Math.max(max, get(boxes, memo, i, m, k + 1) + get(boxes, memo, m + 1, j - 1, 0));
        }
    }
    memo[i][j][k] = max;
    return memo[i][j][k];
}

var removeBoxes = (boxes) => {
    var memo = [];
    for (var i = 0; i < boxes.length; i++) {
        memo[i] = new Array(boxes.length);
        for (var j = 0; j < boxes.length; j++) memo[i][j] = new Array(boxes.length);
    }
    return get(boxes, memo, 0, boxes.length - 1, 0);
};