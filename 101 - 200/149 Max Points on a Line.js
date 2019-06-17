// Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.

// Example 1:
// Input: [[1,1],[2,2],[3,3]]
// Output: 3
// Explanation:
// ^
// |
// |        o
// |     o
// |  o  
// +------------->
// 0  1  2  3  4

// Example 2:
// Input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
// Output: 4
// Explanation:
// ^
// |
// |  o
// |     o        o
// |        o
// |  o        o
// +------------------->
// 0  1  2  3  4  5  6
// NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = (points) => {
    if (!points.length) return 0;
    if (points.length === 1) return 1;
  
    const MISSING = 0.0000000001;
  
    let points1 = [], points1Same = [];
    outer1:
    for (let i = 0; i < points.length; i++) {
      let [x1, y1] = points[i];
      for (let p = 0; p < points1.length; p++) {
        let [x2, y2] = points1[p];
        if (x1 === x2 && y1 === y2) {
          points1Same[p] = points1Same[p].concat(i);
          continue outer1;
        }
      }
      points1.push(points[i]);
      points1Same.push([i]);
    }
  
    if (points1.length === 1) return points.length;
  
    let lines = [], linePointIndexs = [];
    for (let i = 1; i < points1.length; i++) {
      let toSkip = [];
      for (let l = 0; l < lines.length; l++) {
        if (lines[l](points1[i])) {
          linePointIndexs[l] = linePointIndexs[l].concat(points1Same[i]);
          toSkip = toSkip.concat(linePointIndexs[l]);
        }
      }
      for (let j = 0; j < i; j++) {
        if (toSkip.includes(j)) continue;
        let [x1, y1] = points1[j];
        let [x2, y2] = points1[i];
        if (x1 == x2) {
          if (y1 != y2) {
            lines.push(([x, y]) => {
              return x == x1;
            })
            linePointIndexs.push(points1Same[i].concat(points1Same[j]));
            continue;
          }
        }
        lines.push(([x, y]) => {
          return BigInt(x - x1) * BigInt(y1 - y2) == BigInt(y - y1) * BigInt(x1 - x2);
        });
        linePointIndexs.push(points1Same[i].concat(points1Same[j]));
      }
    }
    return Math.max(...linePointIndexs.map(x => x.length));
  };