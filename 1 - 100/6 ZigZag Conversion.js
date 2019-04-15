//The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
//P   A   H   N
//A P L S I I G
//Y   I   R
//And then read line by line: "PAHNAPLSIIGYIR"
//Write the code that will take a string and make this conversion given a number of rows:
//string convert(string s, int numRows);

//Example
//Input: s = 'PAYPALISHIRING", numRows = 4
//Output: PINALSIGYAHRPI
//Explanation:
//P     I    N
//A   L S  I G
//Y A   H R
//P     I

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = (s, numRows) => {
    if (numRows < 2) return s;
    var split = numRows * 2 - 2;
    var len = s.length;
    var nums = Math.ceil(len / split);
    var result = '';
    var mid = split / 2;
    
    for(var i = 0; i <= mid; i++) {
        var next = split - i;
        for (var j = 0; j < nums; j++) {
            var sp = j * split;
            if(i + sp < len) {
                result += s[i + sp];
            }
            if(i > 0 && next > mid && next + sp < len) {
                result += s[next + sp];
            }
        }
    }
    return result;
};

//Test
console.log(convert('PAYPALISHIRING', 3));