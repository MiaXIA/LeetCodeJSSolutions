// Given an integer n, find the closest integer (not including itself), which is a palindrome.
// The 'closest' is defined as absolute difference minimized between two integers.

// Example 1:
// Input: "123"
// Output: "121"
// Note:
// The input n is a positive integer represented by string, whose length will not exceed 18.
// If there is a tie, return the smaller one as answer.

/**
 * @param {string} n
 * @return {string}
 */
var map={'0':'1'};
for (let i = 0; i < 10; i++) map[(i+1).toString()] = i.toString();

const reverse = (str) => {
    return str.split('').reverse().join('');
}

const largerPalindromic = (n) => {
    let l = n.length;
    let floor = Math.floor(l / 2);
    let ceil = Math.ceil(l / 2);
    let h = n.slice(0, ceil);
    h = parseInt(h) + 1 + '';
    let lengthH = h.length;
    if (floor < ceil){
        if(lengthH === ceil) return h + reverse(h.substr(0,floor));
        else return h.substr(0, ceil) +reverse(h.substr(0,ceil));  
    } else{
         if (lengthH === ceil) return h + reverse(h.substr(0,floor));
         else return h.substr(0, ceil) + '0' +reverse(h.substr(0,ceil));
    }
}

const lessPalindromic = (n) => {
    if (n == 11) return '9';
    let l = n.length;
    let floor = Math.floor(l / 2);
    let ceil = Math.ceil(l / 2);
    let h = n.slice(0, ceil);
    h = parseInt(h) - 1 + '';
    let lengthH = h.length;
    if (floor < ceil){
        if(lengthH === ceil) return h + reverse(h.substr(0,floor));
        else return h.substr(0, floor) +reverse(h.substr(0,floor));
    } else{
         if(lengthH === ceil) return h + reverse(h.substr(0,floor));
         else return h.substr(0, floor) + '9' +reverse(h.substr(0,floor));
    }
}

var nearestPalindromic = (n) => {
    let l = n.length;
    if (l === 1) return map[n];
    let floor = Math.floor(l / 2);
    let ceil = Math.ceil(l / 2);
    let res = n.slice(0, ceil);
    if (floor === ceil) res = res + reverse(res);
    else res = res + reverse(res.substr(0,floor));
    let intN = parseInt(n);
    if (res === n){
        let less = lessPalindromic(n);
        let larger = largerPalindromic(n);
        if (intN - parseInt(less) <= parseInt(larger) - intN) return less
        else return larger;
    } else{
        let iRes = parseInt(res) ;
        let delta = iRes -  intN ;
        if (delta > 0){
            let less = lessPalindromic(res);
            if (delta >= intN - parseInt(less)) return less;
            else return res;
        } else{
            let larger = largerPalindromic(res);
            if (-delta > parseInt(larger) - intN) return larger;
            else return res;
        }
    }
};