// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Example 1:
// Input: [3,2,1,5,6,4] and k = 2
// Output: 5

// Example 2:
// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4

// Note: 
// You may assume k is always valid, 1 ≤ k ≤ array's length.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = (nums, k, start = 0, end = nums.length - 1) => {
    const pivot = nums[start + Math.floor((end - start) / 2)];
    let l = start,
        r = end;
    while (l <= r) {
        while (l <= r && nums[l] > pivot) l++;
        while (l <= r && nums[r] < pivot) r--;
        if (l <= r) {
            const temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            l++;
            r--;
        }
    }

    if (start + k - 1 <= r) return findKthLargest(nums, k, start, r);
    if (start + k - 1 >= l) return findKthLargest(nums, k - l + start, l, end);
    return nums[r + 1];
};
