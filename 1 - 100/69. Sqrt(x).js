// Implement int sqrt(int x).
// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

// Example 1:
// Input: 4
// Output: 2

// Example 2:
// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = (x) => {
    if (x === 0 || x === 1) return x;
    let start = 1;
    let end = Math.floor(x / 2);
    while (start <= end) {
        const mid = Math.floor((end - start) / 2 + start);
        const v1 = mid ** 2;
        const v2 = (mid + 1) ** 2;
        if (v1 === x || (v1 < x && v2 > x)) return mid;
        if (v1 < x) start = mid + 1;
        else if ( v1 > x) end = mid - 1;
    }
    return null;
};