// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
// You may assume that the intervals were initially sorted according to their start times.

//Examples
//Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
//Output: [[1,5],[6,9]]

//Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
//Output: [[1,2],[3,10],[12,16]]
//Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = (intervals, newInterval) => {
    if (intervals.length === 0) return [newInterval];
    var res = [];
    var flag = 0;
    for ( var item of intervals) {
        if (item.start >= newInterval.start && item.end <= newInterval.end) {
            continue;
        } else if (newInterval.start > item.end) {
            res.push(item);
        } else if (newInterval.end < item.start) {
            if (flag === 0) res.push(newInterval);
            res.push(item);
            flag = 1;
        } else {
            newInterval.end = Math.max(newInterval.end, item.end);
            newInterval.start = Math.min(newInterval.start, item.start);
        }
    }
    if (flag === 0) res.push(newInterval);
    return res;
};