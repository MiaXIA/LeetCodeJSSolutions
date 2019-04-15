// Implement pow(x, n), which calculates x raised to the power n (xn).

//Example
//Input: 2.00000, 10
//Output: 1024.00000

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = (x, n) => {
    return x ** n;
};

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = (x, n) => {
    if(n === 0) return 1;
    if(n === 1 || x === 0) return x;
    
    if(n > 0) return (n % 2 === 1 ? x : 1) * myPow(x * x, Math.floor(n / 2));
    else return myPow(1 / x, -n);  
};