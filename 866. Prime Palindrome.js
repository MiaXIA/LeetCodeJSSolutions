// Find the smallest prime palindrome greater than or equal to N.
// Recall that a number is prime if it's only divisors are 1 and itself, and it is greater than 1. 
// For example, 2,3,5,7,11 and 13 are primes.
// Recall that a number is a palindrome if it reads the same from left to right as it does from right to left. 
// For example, 12321 is a palindrome.

// Example 1:
// Input: 6
// Output: 7

// Example 2:
// Input: 8
// Output: 11

// Example 3:
// Input: 13
// Output: 101
 
// Note:
// 1 <= N <= 10^8
// The answer is guaranteed to exist and be less than 2 * 10^8.

/**
 * @param {number} N
 * @return {number}
 */
var primePalindrome = (n) => {
    if (n <= 11){
        for (n; true; n++){
        let num = `${n}`;
        if (num[0] == num[num.length - 1]) {
          if (isPalindrome(num) && isPrime(n)){
            return n;
          }
        }
      }
    }
    while (true){
      let num = nextPalindrome(n);
      n= +num;
      let temp = n % 10;
      if (temp != 0 && temp % 2 != 0 && temp != 5 && (temp == 1 || temp == 3 || temp == 7 || temp == 9)){ 
        if (isPrime(n)){
          return num;
        }
      }
    }
    return null;
  };
  
  const isPalindrome = (n) => {
    if (n.length == 1) return true;
    for (let i = 0; i < n / 2; i++){
      if (n[i] != n[n.length - 1 - i]) return false;
    }
    return true;
  }
  
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++){
      if (num % i == 0) return false;
    } 
    return true;
  }
  
  const nextPalindrome = (num) => {
    let str = `${num}`;
    if (str.length % 2 == 0 ) return str ="1" + "0".repeat(str.length - 1) + "1";
    let half = `${+str.substr(0, str.length / 2 + 1) + 1}`;
    let front = half.substr(0, half.length - 1);
    return half + [...front].reverse().join("");
  }