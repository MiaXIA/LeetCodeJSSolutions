// Given a collection of numbers that might contain duplicates, return all possible unique permutations.

//Example
//Input: [1, 1, 2]
//Output: 
// [
//     [1,1,2],
//     [1,2,1],
//     [2,1,1]
//   ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = nums => {
    let res = [];
    let visited = new Array(nums.length).fill(false);
    nums.sort((a, b) => a - b);
    
    var dfs = (nums, current, visited) => {
        if(current.length == nums.length) {
            res.push(current);
            return;
        }
        for(let i = 0; i < nums.length; i++) {
            if(visited[i] || i > 0 && nums[i] == nums[i - 1] && !visited[i - 1]) continue;
            visited[i] = true;
            dfs(nums, current.concat(nums[i]), visited);
            visited[i] = false;
        }
    }
    dfs(nums, [], visited);
    return res;
};