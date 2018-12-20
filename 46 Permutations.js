// Given a collection of distinct integers, return all possible permutations.

//Example
//Input: [1, 2, 3]
//Output: 
// [
//     [1,2,3],
//     [1,3,2],
//     [2,1,3],
//     [2,3,1],
//     [3,1,2],
//     [3,2,1]
//   ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = nums => {
    let res = [[nums.shift()]];
    while(nums.length) {
        let num = nums.shift();
        let temp = [];
        
        for(let i = 0; i < res.length; i++) {
            let len = res[i].length;
            for(let j = 0; j <= len; j++) {
                let cur = res[i].slice();
                cur.splice(j, 0, num);
                temp.push(cur);
            }
        }
        res = temp;
    }
    return res;
};