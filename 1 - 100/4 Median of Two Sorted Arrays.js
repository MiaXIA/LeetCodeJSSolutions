//There are two sorted arrays nums1 and nums2 of size m and n respectively.
//Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
//You may assume nums1 and nums2 cannot be both empty.

//Example
//Input: nums1 = [1, 3], nums2 = [2]
//Output: 2.0
//Explanation: 

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = (nums1, nums2) => {
    let m = nums1.length;
    let n = nums2.length;
    let a = 0, b = 0;
    
    for(let k = 0; k < (m + n + 1) / 2; k++) {
        let i = nums1[0];
        let j = nums2[0];
        a = b;
        
        if( i !== undefined && (j === undefined || i < j)) {
            b = nums1.shift();
        } else {
            b = nums2.shift();
        }
    }
    return (m + n) % 2 === 0 ? (a + b) / 2 : b;
};

//Test
console.log(findMedianSortedArrays([1, 2], [3, 4]));