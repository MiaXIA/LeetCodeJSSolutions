// Alice has a hand of cards, given as an array of integers.
// Now she wants to rearrange the cards into groups so that each group is size W, and consists of W consecutive cards.
// Return true if and only if she can.

// Example 1:
// Input: hand = [1,2,3,6,2,3,4,7,8], W = 3
// Output: true
// Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8].

// Example 2:
// Input: hand = [1,2,3,4,5], W = 4
// Output: false
// Explanation: Alice's hand can't be rearranged into groups of 4.
 
// Note:
// 1 <= hand.length <= 10000
// 0 <= hand[i] <= 10^9
// 1 <= W <= hand.length

/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = (hand, W) => {
    if (hand.length % W !== 0) {
        return false;
    }
    
    hand.sort((a, b) => a - b);
    var map = Object.create(null);
    for (var i = 0; i < hand.length; i++) {
        if (!map[hand[i]]) {
            map[hand[i]] = 1;
        } else {
            map[hand[i]]++;
        }
    }
    
    var next;
    for (var i = 0; i < hand.length; i++) {
        if (map[hand[i]]) {
            map[hand[i]]--;
            for (var j = 1; j < W; j++) {
                if (!map[(next = hand[i] + j)]) {
                    return false;
                }
                map[next]--;
            }
        }
    }
    return true;
};