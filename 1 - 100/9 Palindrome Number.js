//Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

//Example
//Input: 121
//Output: true

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = x => {
    if(x < 0) return false;
    x = String(x);
    var len = x.length;
    for (var i = 0, top = parseInt(len/2); i < top; i++) {
        if(x[i] !== x[len-i-1]) {
            return false;
        }
    }
    return true;
};

//Test
console.log(isPalindrome(121));