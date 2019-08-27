// Alice plays the following game, loosely based on the card game "21".
// Alice starts with 0 points, and draws numbers while she has less than K points.  During each draw, she gains an integer number of points randomly from the range [1, W], where W is an integer.  Each draw is independent and the outcomes have equal probabilities.
// Alice stops drawing numbers when she gets K or more points.  What is the probability that she has N or less points?

// Example 1:
// Input: N = 10, K = 1, W = 10
// Output: 1.00000
// Explanation:  Alice gets a single card, then stops.

// Example 2:
// Input: N = 6, K = 1, W = 10
// Output: 0.60000
// Explanation:  Alice gets a single card, then stops.
// In 6 out of W = 10 possibilities, she is at or below N = 6 points.

// Example 3:
// Input: N = 21, K = 17, W = 10
// Output: 0.73278

// Note:
// 0 <= K <= N <= 10000
// 1 <= W <= 10000
// Answers will be accepted as correct if they are within 10^-5 of the correct answer.
// The judging time limit has been reduced for this question.

/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
var new21Game = (N, K, W) => {
    if (K === 0 || N >= K + W) return 1;
    var queue = new Array(W).fill(0), sum = 1, res = 0;
    queue[W - 1] = 1;
    
    for (var i = 0; i < K - 1; i++) {
      var p = sum / W;
      queue.push(p);
      sum += p;
      sum -= queue.shift();
    }
    
    for (var i = 0; i <= N - K; i++) {
      res += sum / W;
      if (queue.length > 0) sum -= queue.shift();
    }
  
    return res;
  };