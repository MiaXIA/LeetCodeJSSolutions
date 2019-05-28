// You are given an array x of n positive numbers. You start at point (0,0) and moves x[0] metres to the north, then x[1] metres to the west, x[2] metres to the south, x[3] metres to the east and so on. In other words, after each move your direction changes counter-clockwise.
// Write a one-pass algorithm with O(1) extra space to determine, if your path crosses itself, or not.

// Example 1:
// ┌───┐
// │   │
// └───┼──>
//     │
// Input: [2,1,1,2]
// Output: true

// Example 2:
// ┌──────┐
// │      │
// │
// │
// └────────────>
// Input: [1,2,3,4]
// Output: false

// Example 3:
// ┌───┐
// │   │
// └───┼>
// Input: [1,1,1,1]
// Output: true 

/**
 * @param {number[]} x
 * @return {boolean}
 */
var isSelfCrossing = (x) => {
    var cached = new Array(x.length);
    var diff_list = [[0, -1], [-1, 0], [0, 1], [1, 0]];
    
    const get_func = (start, end) => {
        var maxX = Math.max(start[0], end[0]);
        var minX = Math.min(start[0], end[0]);
        var maxY = Math.max(start[1], end[1]);
        var minY = Math.min(start[1], end[1]);
        return function(pos1, pos2) {
            for (var x = Math.min(pos1[0], pos2[0]); x <= Math.max(pos1[0], pos2[0]); x++) {
                for (var y = Math.min(pos1[1], pos2[1]); y <= Math.max(pos1[1], pos2[1]); y++) {
                    if (x === pos1[0] && y === pos1[1]) continue;
                    if (x >= minX && x <= maxX && y >= minY && y <= maxY) return true;
                }
            }
            return false;
        }
    }
    
    var start = [0, 0];
    for (var i = 0; i < x.length; i++) {
        var diff = diff_list[i % 4];
        var end = [start[0] + x[i] * diff[0], start[1] + x[i] * diff[1]];
        for (var indexf = 0; indexf < i; indexf++) {
            if (cached[indexf](start,end)) return true;
        }
        cached[i] = get_func(start, end);
        start = end;
    }
    return false;
};