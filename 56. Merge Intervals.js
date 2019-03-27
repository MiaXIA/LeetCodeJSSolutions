// Given a collection of intervals, merge all overlapping intervals.

//Examples
//Input: [[1,3],[2,6],[8,10],[15,18]]
//Output: [[1,6],[8,10],[15,18]]
//Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

//Input: [[1,4],[4,5]]
//Output: [[1,5]]
//Explanation: Intervals [1,4] and [4,5] are considered overlapping.

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = (intervals) => {
    if (!intervals.length) return intervals;
    intervals.sort((a, b) => a.start !== b.start ? a.start - b.start : a.end - b.end);
    var prev = intervals[0];
    var res = [prev];
    for (var curr of intervals) {
        if (curr.start <= prev.end) {
            prev.end = Math.max(prev.end, curr.end);
        } else {
            res.push(curr);
            prev = curr;
        }
    }
    return res;
};