// You have a list of points in the plane. Return the area of the largest triangle that can be formed by any 3 of the points.

// Example:
// Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
// Output: 2
// Explanation: 
// The five points are show in the figure below. The red triangle is the largest.

// Notes:
// 3 <= points.length <= 50.
// No points will be duplicated.
//  -50 <= points[i][j] <= 50.
// Answers within 10^-6 of the true value will be accepted as correct.

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = (points) => {
    let comb = []
    let maxArea = 0;
    const dfs = (n, start, curr) => {
        if (n == curr.length) {
            let temp = JSON.parse(JSON.stringify(curr));
            comb.push(temp);
            return;
        }
        for (let j = start; j < points.length; j++) {
            curr.push(points[j]);
            dfs(n, j + 1, curr);
            curr.pop();
        }
    };

    let area = (a, b, c) => {
        let side1 = dist(a, b);
        let side2 = dist(b, c);
        let side3 = dist(a, c);
        let s = (side1 + side2 + side3) / 2;
        if (maxArea < Math.round(Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3))) * 10) / 10)
            maxArea = Math.round(Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3))) * 10) / 10;
    };

    let dist = ([x1, y1], [x2, y2]) => {
        let a = x1 - x2;
        let b = y1 - y2;
        return Math.sqrt(a * a + b * b);
    };

    for (i = 1; i <= 3; i++) dfs(i, 0, []);
    comb = comb.filter((el) => {
        return el.length == 3
    });
    for (coord of comb) area(coord[0], coord[1], coord[2]);
    return maxArea;
};