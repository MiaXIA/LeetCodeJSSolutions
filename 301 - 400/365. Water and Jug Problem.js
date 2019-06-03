// You are given two jugs with capacities x and y litres. There is an infinite amount of water supply available. You need to determine whether it is possible to measure exactly z litres using these two jugs.
// If z liters of water is measurable, you must have z liters of water contained within one or both buckets by the end.
// Operations allowed:
// Fill any of the jugs completely with water.
// Empty any of the jugs.
// Pour water from one jug into another till the other jug is completely full or the first jug itself is empty.

// Example 1: (From the famous "Die Hard" example)
// Input: x = 3, y = 5, z = 4
// Output: True

// Example 2:
// Input: x = 2, y = 6, z = 5
// Output: False

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = (x, y, z) => {
    if (z > x + y) return false;
    const terms = { '0': 1, [x]: 1, [y]: 1 };
    let xsum = x;
    let ysum = y;
    let stop = x * y;
    while (xsum < stop || ysum < stop) {
        if (xsum < ysum) {
            terms[ysum - xsum] = 1;
            xsum += x;
        } else {
            terms[xsum - ysum] = 1;
            ysum += y;
        }
    }
    for (let key in terms) if (terms[z - key]) return true;
    return false;
};