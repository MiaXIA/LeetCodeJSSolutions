// You are given an integer array sorted in ascending order (may contain duplicates), you need to split them into several subsequences, where each subsequences consist of at least 3 consecutive integers. Return whether you can make such a split.

// Example 1:
// Input: [1,2,3,3,4,5]
// Output: True
// Explanation:
// You can split them into two consecutive subsequences : 
// 1, 2, 3
// 3, 4, 5

// Example 2:
// Input: [1,2,3,3,4,4,5,5]
// Output: True
// Explanation:
// You can split them into two consecutive subsequences : 
// 1, 2, 3, 4, 5
// 3, 4, 5

// Example 3:
// Input: [1,2,3,4,4,5]
// Output: False
// Note:
// The length of the input is in range of [1, 10000]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = (nums) => {
    let i = 1;
    let ar = new Array();
    ar.push([nums[0]])
    while (i < nums.length){
        let j = i,k = -1;
        for (let m = 0; m < ar.length; m++){
            let item = ar[m];
            if (item.length < 3){
                if (item[item.length - 1] == nums[i] - 1){
                    item.push(nums[i++]);
                    break;    
                }
                else if (item[item.length - 1] !== nums[i]) return false;
            }       
            else if (k == -1 && item[item.length - 1] == nums[i] - 1) k = m;
        }
        if (j == i){
            if (k == -1) ar.push([nums[i]]);
            else ar[k].push(nums[i]);
            i++;
        }
    }
    for (let item of ar){
        if (item.length < 3) return false;
    }
    return true;
};