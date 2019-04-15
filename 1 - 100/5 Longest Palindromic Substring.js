//Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

//Example
//Input: babad
//Output: bab
//Note: aba is also a valid answer

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = s => {
    let res = '', cur = '';
    
    for(let i = 0; i < s.length; i++) {
        for(let j = i; j < i + 2; j++) {
            let left = i;
            let right = j;
            while(s[left] && s[left] === s[right]) {
                cur = s.substring(left, right + 1);
                if(cur.length > res.length) res = cur;
                left --;
                right ++;
            }
        }
    }
    return res;
};

//Test
console.log(longestPalindrome('cbbd'));