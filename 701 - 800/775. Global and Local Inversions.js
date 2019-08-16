// We have some permutation A of [0, 1, ..., N - 1], where N is the length of A.
// The number of (global) inversions is the number of i < j with 0 <= i < j < N and A[i] > A[j].
// The number of local inversions is the number of i with 0 <= i < N and A[i] > A[i+1].
// Return true if and only if the number of global inversions is equal to the number of local inversions.

// Example 1:
// Input: A = [1,0,2]
// Output: true
// Explanation: There is 1 global inversion, and 1 local inversion.

// Example 2:
// Input: A = [1,2,0]
// Output: false
// Explanation: There are 2 global inversions, and 1 local inversion.

// Note:
// A will be a permutation of [0, 1, ..., A.length - 1].
// A will have length in range [1, 5000].
// The time limit for this problem has been reduced.

/**
 * @param {number[]} A
 * @return {boolean}
 */
const mergeSort = (arr, left, mid, right) => {
	let res = [], l = left, r = mid;
	while (l < mid && r < right) {
		if (arr[l] <= arr[r]) { res.push(arr[l++]); }
		else { res.push(arr[r++]); }
	}
	while (l < mid) res.push(arr[l++]);
	while (r < right) res.push(arr[r++]);
	for (let i = left; i < right; i++) arr[i] = res[i - left];
}

const cntInversions = (arr, left, mid) => {
    let i = left, j = mid - 1, cnt = 0;
	while (i < mid) {
		while (arr[j + 1] <= arr[i]) j++;
		if (arr[i] > arr[j]) cnt += (j - mid) + 1;
		i++;
	}
    return cnt;
}

const globalInversions = (arr, left, right) => {
	if (right === left + 1) return 0;

	let mid = Math.floor((left + right) / 2);
	let lcnt = globalInversions(arr, left, mid);
	let rcnt = globalInversions(arr, mid, right);
    let cnt = cntInversions(arr, left, mid);
    mergeSort(arr, left, mid, right);

	return lcnt + rcnt + cnt;
}

const localInversions = A => {
    let cnt = 0;
    for (let i = 0; i < A.length - 1; i++) { 
        if (A[i] > A[i + 1]) cnt++;
    }
    return cnt;
}

var isIdealPermutation = A => localInversions(A) === globalInversions(A, 0, A.length);