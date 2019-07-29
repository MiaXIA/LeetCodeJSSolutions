// Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.
// Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, which contains initial elements from the stream. For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.

// Example:
// int k = 3;
// int[] arr = [4,5,8,2];
// KthLargest kthLargest = new KthLargest(3, arr);
// kthLargest.add(3);   // returns 4
// kthLargest.add(5);   // returns 5
// kthLargest.add(10);  // returns 5
// kthLargest.add(9);   // returns 8
// kthLargest.add(4);   // returns 8

// Note: 
// You may assume that nums' length ≥ k-1 and k ≥ 1.

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.sorted = nums.sort((a, b) => a - b);
    this.k = k;
  };
  
  /** 
   * @param {number} val
   * @return {number}
   */
  KthLargest.prototype.add = function(val) {
    let left = 0;
    let right = this.sorted.length - 1;
    let insertIndex = left;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (val > this.sorted[mid]) {
        left = mid + 1;
        insertIndex = mid + 1;
      } else if (val < this.sorted[mid]) {
        right = mid - 1;
        insertIndex = mid;
      } else {
        // we found target
        insertIndex = mid;
        break;
      }
    }
    this.sorted.splice(insertIndex, 0, val);
    return this.sorted[this.sorted.length - this.k];
  };
  
  /** 
   * Your KthLargest object will be instantiated and called as such:
   * var obj = new KthLargest(k, nums)
   * var param_1 = obj.add(val)
   */