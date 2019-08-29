// Return the length of the shortest, non-empty, contiguous subarray of A with sum at least K.
// If there is no non-empty subarray with sum at least K, return -1.

// Example 1:
// Input: A = [1], K = 1
// Output: 1

// Example 2:
// Input: A = [1,2], K = 4
// Output: -1

// Example 3:
// Input: A = [2,-1,2], K = 3
// Output: 3

// Note:
// 1 <= A.length <= 50000
// -10 ^ 5 <= A[i] <= 10 ^ 5
// 1 <= K <= 10 ^ 9

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = (A, K) => {
    var distancesToK = new Array(A.length);
    var minimumDist = -1;
    for (var i = 0; i < A.length; i++) {
        distancesToK[i] = shortestDistanceToK(A, K, i);
        if (distancesToK[i] > 0 && ((distancesToK[i] < minimumDist) || (minimumDist == -1))) {
            minimumDist = distancesToK[i];
        }
    }
    
    return minimumDist;
};

const shortestDistanceToK = (A, K, start) => {
    var minDist = -1;
    var currCounter = 0;
    
    for (var j = start; j < A.length; j++) {
        currCounter += A[j];
        if (currCounter >= K) {
            return (j - start + 1);
        }
        if (currCounter < 0 || minDist != -1) {
            return minDist;
        }
    }
    
    return minDist;
}