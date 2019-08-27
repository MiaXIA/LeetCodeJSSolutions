// Let's call any (contiguous) subarray B (of A) a mountain if the following properties hold:
// B.length >= 3
// There exists some 0 < i < B.length - 1 such that B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
// (Note that B could be any subarray of A, including the entire array A.)
// Given an array A of integers, return the length of the longest mountain. 
// Return 0 if there is no mountain.

// Example 1:
// Input: [2,1,4,7,3,2,5]
// Output: 5
// Explanation: The largest mountain is [1,4,7,3,2] which has length 5.

// Example 2:
// Input: [2,2,2]
// Output: 0
// Explanation: There is no mountain.

// Note:
// 0 <= A.length <= 10000
// 0 <= A[i] <= 10000

// Follow up:
// Can you solve it using only one pass?
// Can you solve it in O(1) space?

/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = (A) => {
    let left, m, right;
    let max = 0;
    for (let i = 0; i < A.length - 1; ) {
      left = i;
      while (A[left + 1] <= A[left]) {
        left += 1;
      }
      m = left;
      while (A[m + 1] > A[m]) {
        m += 1;
      }
      right = m;
      while (A[right + 1] < A[right]) {
        right += 1;
      }
      if (isValid(left, m, right)) {
        max = Math.max(max, right - left + 1);
      }
      i = right;
    }
    return max;
  };
  
  const isValid = (left, m, right) => {
    return m - left >= 1 && right - m >= 1;
  }