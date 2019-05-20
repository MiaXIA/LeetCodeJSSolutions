// Write a program to find the nth super ugly number.
// Super ugly numbers are positive numbers whose all prime factors are in the given prime list primes of size k.

// Example:
// Input: n = 12, primes = [2,7,13,19]
// Output: 32 
// Explanation: [1,2,4,7,8,13,14,16,19,26,28,32] is the sequence of the first 12 
//              super ugly numbers given primes = [2,7,13,19] of size 4.

// Note:
// 1 is a super ugly number for any given primes.
// The given numbers in primes are in ascending order.
// 0 < k ≤ 100, 0 < n ≤ 106, 0 < primes[i] < 1000.
// The nth super ugly number is guaranteed to fit in a 32-bit signed integer.

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = (n, primes) => {
    primes.sort((a,b)=>{ return a-b; });
    let ptr=[];
    let ugly=[];
    for (let i = 0;i < primes.length;i++) ptr[i]=0;
    ugly.push(1);
    for (let i = 1;i < n;i++){
        let mn = Math.pow(2, 32) - 1
        for (let j = 0;j < primes.length;j++) mn=Math.min(mn,primes[j]*ugly[ptr[j]]);
        ugly[i] = mn;
        for (let j = 0;j < primes.length;j++){
            if (mn % primes[j] === 0) ptr[j]++;
        }
    }
    return ugly[n - 1];
};