// Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).
// Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

// Example:
// Input:
// [[0,0],[1,0],[2,0]]
// Output:
// 2
// Explanation:
// The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = (points) => {
    const distance = (p1, p2) => (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2;
    const set = new Set();
    const len = points.length;
    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            for (let k = j + 1; k < len; k++) {
                const d1 = distance(points[i], points[j]);
                const d2 = distance(points[i], points[k]);
                const d3 = distance(points[j], points[k]);
                if (d1 === d2) {
                    set.add(`${i}-${j}-${k}`);
                    set.add(`${i}-${k}-${j}`);
                }
                if (d1 === d3) {
                    set.add(`${j}-${i}-${k}`);
                    set.add(`${j}-${k}-${i}`);
                }
                if (d2 === d3) {
                    set.add(`${k}-${i}-${j}`);
                    set.add(`${k}-${j}-${i}`);
                }
            }
        }
    }
    return set.size;
};

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = (points) => {
    let res = 0;
    const distance = (p1, p2) => (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2;
    for (let i = 0; i < points.length; i++) {
        const map = {};
        for (let j = 0; j < points.length; j++) {
            if (i === j) continue;
            const d = distance(points[i], points[j]);
            map[d] = (map[d] || 0) + 1;
        }
        Object.values(map).forEach(_v => { res += _v * (_v - 1); });
    }
    return res;
};