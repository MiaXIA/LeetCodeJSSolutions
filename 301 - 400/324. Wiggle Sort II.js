// Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

// Example 1:
// Input: nums = [1, 5, 1, 1, 6, 4]
// Output: One possible answer is [1, 4, 1, 5, 1, 6].

// Example 2:
// Input: nums = [1, 3, 2, 2, 3, 1]
// Output: One possible answer is [2, 3, 1, 3, 1, 2].

// Note:
// You may assume all input has valid answer.

// Follow Up:
// Can you do it in O(n) time and/or in-place with O(1) extra space?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const swap = (list, left, right) => {
    let temp = list[left];
    list[left] = list[right];
    list[right] = temp;
}

const quickSelect= (array, k) => {
    const quickRecurse = (left, right) => {
        if (left <= right) {
            let partitionIndex = partition(left, right);
            if (partitionIndex === k - 1) return array[partitionIndex];
            else if (partitionIndex < k - 1) return quickRecurse(partitionIndex + 1, right);
            else if (partitionIndex > k - 1) return quickRecurse(left, partitionIndex - 1);
        }
    }
    
    const partition = (left, right) => {
        let pivot = array[right];
        let i = left;
        for (let j = left; j < right; j++) {
            if (array[j] < pivot) {
                swap(array, j, i);
                i++;
            }
        }
        swap(array, i, right);
        return i;
    }
    
    return quickRecurse(0, array.length - 1);
}

const newIndex = (index, n) => {
    return (1 + 2 * index) % (n | 1);
}

var wiggleSort = (nums) => {
    const mid = quickSelect(nums, parseInt((nums.length + 1) / 2));
    let n = nums.length;
    
    let left = 0;
    let i = 0;
    let right = n - 1;
    
    while (i <= right) {
        if (nums[newIndex(i, n)] > mid) {
            swap(nums, newIndex(left++, n), newIndex(i++, n));
        } else if (nums[newIndex(i, n)] < mid) {
            swap(nums, newIndex(right--, n), newIndex(i, n));
        } else i++;
    }
};