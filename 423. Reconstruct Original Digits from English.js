// Given a non-empty string containing an out-of-order English representation of digits 0-9, output the digits in ascending order.
// Note:
// Input contains only lowercase English letters.
// Input is guaranteed to be valid and can be transformed to its original digits. That means invalid inputs such as "abc" or "zerone" are not permitted.
// Input length is less than 50,000.

// Example 1:
// Input: "owoztneoer"
// Output: "012"

// Example 2:
// Input: "fviefuro"
// Output: "45"

/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = (s) => {
    var map = Object.create(null);
    var nums = new Array(10).fill(0);
    
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]]) map[s[i]]++;
        else map[s[i]] = 1;
    }
    
    var detect = [
        [0, "zero", "z"],
        [2, "two", "w"],
        [4, "four", "u"],
        [6, "six", "x"],
        [8, "eight", "g"],
        [5, "five", "f"],
        [7, "seven", "v"],
        [9, "nine", "i"],
        [3, "three", "h"],
        [1, "one", "n"]
    ];
    
    var count;
    for (var i = 0; i < detect.length; i++) {
        count = map[detect[i][2]];
        if (count > 0) {
            nums[detect[i][0]] = count;
            for (var j = 0; j < detect[i][1].length; j++) map[detect[i][1][j]] -= count;
        }
    }
    
    var res = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) res.push(i.toString().repeat(nums[i]));
    }
    
    return res.join('');
};