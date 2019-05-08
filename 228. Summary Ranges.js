// Given a sorted integer array without duplicates, return the summary of its ranges.

// Example 1:
// Input:  [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.

// Example 2:
// Input:  [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.

/**
 * @param {number[]} nums
 * @return {string[]}
 */
const pushToResult = (result, arr) => {
    if (arr.length > 1) result.push(`${arr[0]}->${arr.pop()}`);
    else if (arr.length) result.push(`${arr[0]}`);
}

var summaryRanges = (nums) => {
    let arr = [];
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        const _num = nums[i];
        if (arr.length > 0) {
            const _prev = arr[arr.length - 1];
            if (_prev + 1 === _num) arr.push(_num);
            else {
                pushToResult(result, arr);
                arr = [_num];
            }
        } else arr.push(_num);
    }
    pushToResult(result, arr);
    return result;
};
