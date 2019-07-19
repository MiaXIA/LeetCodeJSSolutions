// Given two integers n and k, find how many different arrays consist of numbers from 1 to n such that there are exactly k inverse pairs.
// We define an inverse pair as following: For ith and jth element in the array, if i < j and a[i] > a[j] then it's an inverse pair; Otherwise, it's not.
// Since the answer may be very large, the answer should be modulo 109 + 7.

// Example 1:
// Input: n = 3, k = 0
// Output: 1
// Explanation: 
// Only the array [1,2,3] which consists of numbers from 1 to 3 has exactly 0 inverse pair.
 
// Example 2:
// Input: n = 3, k = 1
// Output: 2
// Explanation: 
// The array [1,3,2] and [2,1,3] have exactly 1 inverse pair.
 
// Note:
// The integer n is in the range [1, 1000] and k is in the range [0, 1000].

/**
 * @param {number[][]} courses
 * @return {number}
 */
const binarySearch = (arr, x) => {
    var s = 0, e = arr.length - 1;
    while (s < e) {
        var mid = ~~((s + e) / 2);
        if (arr[mid] < x) s = mid + 1;
        else e = mid;
    }
    return arr[e] >= x ? e : -1;
}

var scheduleCourse = (courses) => {
    courses.sort((a, b) => a[1] - b[1]);
    
    var queue = [], time = 0;
    for (var course of courses) {
        var index = binarySearch(queue, course[0]);
        if (index === -1) queue.push(course[0]);
        else queue.splice(index, 0, course[0]);
        time += course[0];
        if (time > course[1]) time -= queue.pop();
    }
    return queue.length;
};