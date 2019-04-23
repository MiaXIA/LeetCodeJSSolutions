// There are N children standing in a line. Each child is assigned a rating value.
// You are giving candies to these children subjected to the following requirements:
// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// What is the minimum candies you must give?

// Example 1:
// Input: [1,0,2]
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

// Example 2:
// Input: [1,2,2]
// Output: 4
// Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
//              The third child gets 1 candy because it satisfies the above two conditions.

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = (ratings) => {
    let total = 0;
    let stack = 1;
    let minCost = 1;
    
    for (let i = 1, len = ratings.length; i < len; i++) {
        if (ratings[i] < ratings[i - 1]) {
            stack++;
        } else {
            total += stack * (stack - 1) / 2 + Math.max(minCost, stack);
            if (ratings[i] === ratings[i - 1]) minCost = 1;
            else if ( stack > 1) minCost = 2;
            else minCost++;
            
            stack = 1;
        }
    }
    total += stack * (stack - 1) / 2 + Math.max(minCost, stack);
    return total;
};