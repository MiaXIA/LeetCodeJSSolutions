// Say you have an array for which the ith element is the price of a given stock on day i.
// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:
// You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
// After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)

// Example:
// Input: [1,2,3,0,2]
// Output: 3 
// Explanation: transactions = [buy, sell, cooldown, buy, sell]

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = (prices) => {
    let memo = {};
    const rec = (i, j) => {
        let index = [i, j];
        if (index in memo) return memo[index];
        if (i >= prices.length) return 0;
        let profit = -Infinity;
        
        if (prices[j] >= prices[i]) profit = Math.max(profit, rec(i + 1, i));
        else if (prices[i] - prices[j] > 0) {
            profit = Math.max(profit, prices[i] - prices[j] + rec(i + 3, i + 2));
            profit = Math.max(profit, rec(i + 1, j));
        }
        memo[index] = profit;
        return profit;
    }
    return rec(1, 0);
};