// Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

// Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

// The largest rectangle is shown in the shaded area, which has area = 10 unit.

// Example:
// Input: [2,1,5,6,2,3]
// Output: 10

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = (heights) => {
    if (heights.length === 0) return 0;
    var stack = [];
    var max = 0;
    for (var i = 0; i <= heights.length; i++) {
        var cur = (i === heights.length) ? -1 : heights[i];
        while (stack.length !== 0 && cur < heights[stack[stack.length - 1]]) {
            var index = stack.pop();
            var h = heights[index];
            var w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            max = Math.max(max, h * w);
        }
        stack.push(i);
    }
    return max;
};