// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
// Your algorithm's runtime complexity must be in the order of O(log n).
// If the target is not found in the array, return [-1, -1].

//Example
//Input: nums = [5, 7, 7, 8, 8, 10], target = 8
//Output: [3, 4]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = (nums, target) => {
    if(!nums.length) return [-1,-1];
    return [binarySearch(nums,target,0),binarySearch(nums,target,1)];
};

const binarySearch = (nums,target,first) => {
    let start = 0;
    let end = nums.length-1;
    let index = -1;
    while(start <=end){
        let mid = Math.floor((start + end) / 2);
        if(nums[mid] === target){
            index = mid;
            if(first){
                start = mid + 1;
            }else{
                end = mid - 1;
            }            
        }else if(nums[mid] < target){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return index;
};

//Test
console.log(searchRange([0, 1, 2, 3, 4], 5));