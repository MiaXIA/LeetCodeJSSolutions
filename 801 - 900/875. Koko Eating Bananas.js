// Koko loves to eat bananas.  There are N piles of bananas, the i-th pile has piles[i] bananas.  The guards have gone and will come back in H hours.
// Koko can decide her bananas-per-hour eating speed of K.  Each hour, she chooses some pile of bananas, and eats K bananas from that pile.  If the pile has less than K bananas, she eats all of them instead, and won't eat any more bananas during this hour.
// Koko likes to eat slowly, but still wants to finish eating all the bananas before the guards come back.
// Return the minimum integer K such that she can eat all the bananas within H hours.

// Example 1:
// Input: piles = [3,6,7,11], H = 8
// Output: 4

// Example 2:
// Input: piles = [30,11,23,4,20], H = 5
// Output: 30

// Example 3:
// Input: piles = [30,11,23,4,20], H = 6
// Output: 23

// Note:
// 1 <= piles.length <= 10^4
// piles.length <= H <= 10^9
// 1 <= piles[i] <= 10^9

/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = (piles, H) => {
    const largest = Math.max(...piles);
    if (piles.length === H) return largest;
  
    let lo = 1;
    let hi = largest;
    let i = Math.floor((lo + hi) / 2);
    while (lo < hi) {
      let time = 0;
      for (let t of piles) {
        if (i >= t) {
          time++;
        } else {
          time += Math.ceil(t / i);
        }
        if (time > H) {
          lo = i + 1;
          i = Math.floor((lo + hi) / 2);
          break;
        }
      }
      if (time <= H) {
        hi = i;
        i = Math.floor((lo + hi) / 2);
      }
    }
    return lo;
  };