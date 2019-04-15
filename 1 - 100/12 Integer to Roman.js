//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

//Example
//Input: 3
//Output: III

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = num => {
    let birlik = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    let unlik = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    let yuzlik = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    let minglik = ['', 'M', 'MM', 'MMM'];
    
    let ming = Math.floor(num / 1000);
    let yuz = Math.floor((num % 1000) / 100);
    let un = Math.floor(((num % 1000) % 100) / 10);
    let bir = ((num % 1000) % 100) % 10;
    
    return minglik[ming] + yuzlik[yuz] + unlik[un] + birlik[bir];
};

//Test
console.log(intToRoman(1994));