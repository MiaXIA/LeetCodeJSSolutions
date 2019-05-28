// You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

// Example:
// Input: [5,2,6,1]
// Output: [2,1,1,0] 
// Explanation:
// To the right of 5 there are 2 smaller elements (2 and 1).
// To the right of 2 there is only 1 smaller element (1).
// To the right of 6 there is 1 smaller element (1).
// To the right of 1 there is 0 smaller element.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = (nums) => {
    const map = [...new Set(nums)].sort((a, b) => a - b).reduce((obj, v, i) => obj.set(v, i), new Map());
    
    const segTree = Array(Math.max(map.size * 2 - 1, 0)).fill(0);
    
    const sum = (l, r) => {
        l += map.size - 1;
        r += map.size - 1;
        let res = 0;
        
        while (l <= r) {
            if (l % 2 === 0) res += segTree[l++];
            if (r % 2 === 1) res += segTree[r--];
            
            l = (l - 1) >> 1;
            r = (r - 1) >> 1;
        }
        return res;
    }
    
    const increment = i => {
        i += map.size - 1;
        segTree[i]++;
        
        while(i > 0) {
            let l = i - (i % 2 ? 0 : 1);
            let r = l + 1;
            
            i = ( i - 1) >> 1;
            segTree[i] = segTree[l] + segTree[r];
        }
    }
    
    for (let i = nums.length - 1; i >= 0; i--) {
        let index = map.get(nums[i]);
        nums[i] = sum(0, index - 1);
        increment(index);
    }
    
    return nums;
};
