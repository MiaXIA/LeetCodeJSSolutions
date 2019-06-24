// Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

// Example 1:
// Input: [5, 4, 3, 2, 1]
// Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
// Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". 
// For the left two athletes, you just need to output their relative ranks according to their scores.
// Note:
// N is a positive integer and won't exceed 10,000.
// All the scores of athletes are guaranteed to be unique.

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = (nums) => {
    const medals = {};
    const sorted = nums.slice().sort((a, b) => b - a);
    if (sorted[0]) medals[sorted[0]] = 'Gold Medal';
    if (sorted[1]) medals[sorted[1]] = 'Silver Medal';
    if (sorted[2]) medals[sorted[2]] = 'Bronze Medal';
    for (let i = 3; i < nums.length; i++) medals[sorted[i]] = (i + 1).toString();
    return nums.map(num => medals[num]);
};