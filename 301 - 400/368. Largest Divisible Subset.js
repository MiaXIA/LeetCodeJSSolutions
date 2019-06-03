// Given a set of distinct positive integers, find the largest subset such that every pair (Si, Sj) of elements in this subset satisfies:
// Si % Sj = 0 or Sj % Si = 0.
// If there are multiple solutions, return any subset is fine.

// Example 1:
// Input: [1,2,3]
// Output: [1,2] (of course, [1,3] will also be ok)

// Example 2:
// Input: [1,2,4,8]
// Output: [1,2,4,8]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = (nums) => {
    var sPos=0, sol=[], best=[], end=nums.length, furthest=[], largest;
    nums.sort((a, b) => a - b);
    largest = nums[end - 1];
    
    const passes = (i) => {
        if ((furthest[i] == void 0 || sPos > furthest[i]) && 
           (sPos==0 || (nums[i] % sol[sPos - 1]) === 0)) {
            furthest[i] = sPos;
            return 1;
        }
        return 0;
    }
    
    const rec = (i) => {
        for (; i < end; ++i) {
            if (best.length > sPos && ((1 << (best.length - sPos)) * nums[i]) > largest) break;
            if (passes(i)) {
                sol[sPos++] = nums[i];
                rec(i + 1);
                --sPos;
            }
        }
        if (best.length < sPos) best = sol.slice(0, sPos);
    }
    
    rec(0);
    return best;
};