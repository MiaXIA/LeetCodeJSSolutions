// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
//2 => a, b, c
//3 => d, e, f
//4 => g, h, i
//5 => j, k, l
//6 => m, n, o
//7 => p, q, r, s
//8 => t, u, v
//9 => w, x, y, z

//Example
//Input: '23'
//output: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']

/**
 * @param {string} digits
 * @param {string} current
 * @param {array} res
 * @return {string[]}
 */
var letterCombinations = (digits, current = '', res = []) => {
    const numbersMap = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }    
    if(digits.length === 0 && current === '') return res;
    if(digits.length < 1) return res.push(current);
    
    let curNum, curChar;   
    curNum = numbersMap[digits[0]];
    
    for(let i = 0; i < curNum.length; i++) {
        curChar = numbersMap[digits[0]][i];
        letterCombinations(digits.slice(1), current + curChar, res);
    }
    return res;
};

//Test
console.log(letterCombinations('23'));