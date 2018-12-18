//Given a 32-bit signed integer, reverse digits of an integer.

//Example
//Input: 123
//Output: 321

/**
 * @param {number} x
 * @return {number}
 */
var reverse = x => {
    let res = 0;
    
    while(x !== 0) {
        res = res * 10 + (x % 10);
        if(res > 2147483648 || res < -2147483648) {
            return 0;
        }
        x = (x /10) | 0;
    }
    return res;
};

//Test
console.log(reverse(-120));