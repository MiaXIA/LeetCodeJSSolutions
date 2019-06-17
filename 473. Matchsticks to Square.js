// Remember the story of Little Match Girl? By now, you know exactly what matchsticks the little match girl has, please find out a way you can make one square by using up all those matchsticks. You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.
// Your input will be several matchsticks the girl has, represented with their stick length. Your output will either be true or false, to represent whether you could make one square using all the matchsticks the little match girl has.

// Example 1:
// Input: [1,1,2,2,2]
// Output: true
// Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.

// Example 2:
// Input: [3,3,3,3,4]
// Output: false
// Explanation: You cannot find a way to form a square with all the matchsticks.
// Note:
// The length sum of the given matchsticks is in the range of 0 to 10^9.
// The length of the given matchstick array will not exceed 15.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const getSum = (total, num) => {
    return total + num;
  }
  
  var makesquare = (nums) => {
      let squareBool = false;
      
      if (!nums) return false;
      else if (nums.length){
          let numOfMatches = nums.length;
          let total = 0;
          total = nums.reduce(getSum);
  
          if (total === 0 || total % 4 !== 0) return false;
          let side = total / 4;
          nums.sort(function(a, b){ return b - a; });
          let sums = [0,0,0,0];
  
          const dfs = (index) => {
              if (index === numOfMatches){
                  if ((sums[0] === side) && (sums[1] === side) && (sums[2] === side)  && (sums[3] === side)){
                      return true;
                  }
                  else return false;
              }
              
              for (let i = 0; i < 4; i++){
                  if ((sums[i] + nums[index]) <= side){
                      sums[i] += nums[index];
                      if (dfs(index + 1)){
                          return true;
                      }
                      sums[i] -= nums[index];
                  }
              }
              return false;
          }
          squareBool = dfs(0);
      }
      else return false;
      return squareBool; 
  };