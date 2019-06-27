// Given a list of 24-hour clock time points in "Hour:Minutes" format, find the minimum minutes difference between any two time points in the list.

// Example 1:
// Input: ["23:59","00:00"]
// Output: 1
// Note:
// The number of time points in the given list is at least 2 and won't exceed 20000.
// The input time is legal and ranges from 00:00 to 23:59.

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = (timePoints) => {
    let set = new Set(timePoints);
    if (set.size < timePoints.length) return 0;
    let last = -1;
    let res = 10000;
    let min = 0;
    for (let i = 0 ; i < 24; i++){
        for (let j = 0 ; j < 60; j++) {
            let time = (i < 10 ? "0" :"")  + i.toString() + ":";
            time += (j < 10 ? "0" : "") + j.toString();
            if (set.has(time)) {
                if (last === -1) {
                    last = i * 60 + j;
                    min = last + 24 * 60;
                } else {
                    let d = i * 60 + j;
                    res = Math.min(res, d - last);
                    last = d;
                }
            }
        }
    }
    return Math.min(res, min - last);
};