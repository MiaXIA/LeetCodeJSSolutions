// Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

// Example 1:
// Input: 123
// Output: "One Hundred Twenty Three"

// Example 2:
// Input: 12345
// Output: "Twelve Thousand Three Hundred Forty Five"

// Example 3:
// Input: 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

// Example 4:
// Input: 1234567891
// Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"

/**
 * @param {number} num
 * @return {string}
 */
const getMap = () => {
    const map = new Map();
    map.set(0, 'Zero');
    map.set(1, 'One');
    map.set(2, 'Two');
    map.set(3, 'Three');
    map.set(4, 'Four');
    map.set(5, 'Five');
    map.set(6, 'Six');
    map.set(7, 'Seven');
    map.set(8, 'Eight');
    map.set(9, 'Nine');
    map.set(10, 'Ten');
    map.set(11, 'Eleven');
    map.set(12, 'Twelve');
    map.set(13, 'Thirteen');
    map.set(14, 'Fourteen');
    map.set(15, 'Fifteen');
    map.set(16, 'Sixteen');
    map.set(17, 'Seventeen');
    map.set(18, 'Eighteen');
    map.set(19, 'Nineteen');
    map.set(20, 'Twenty');
    map.set(30, 'Thirty');
    map.set(40, 'Forty');
    map.set(50, 'Fifty');
    map.set(60, 'Sixty');
    map.set(70, 'Seventy');
    map.set(80, 'Eighty');
    map.set(90, 'Ninety');
    
    return map;
}

const lessThan100 = (num, map) => {
    if (num <= 20) return map.get(num);
    const twoDigit = Math.floor(num / 10) * 10;
    const remainder = num % 10;
    return map.get(twoDigit) + (remainder > 0 ? ` ${map.get(remainder)}` : '');
}

const hundreds = (num, map) => {
    const hundred = Math.floor(num / 100);
    const remainder = num % 100;
    let result = '';
    if (hundred > 0 && remainder > 0) result = `${map.get(hundred)} Hundred ${lessThan100(remainder, map)}`;
    else if (hundred > 0 && remainder === 0) result = `${map.get(hundred)} Hundred`;
    else if (hundred === 0 && remainder > 0) result = `${lessThan100(remainder, map)}`;
    
    return result;
}

var numberToWords = (num) => {
    const map = getMap();
    if (num === 0) return map.get(num);
    
    const billion = Math.floor(num / 1000000000);
    const million = Math.floor((num - billion * 1000000000) / 1000000);
    const thousand = Math.floor((num - billion * 1000000000 - million * 1000000) / 1000);
    const remainder = num - billion * 1000000000 - million * 1000000 - thousand * 1000;
    
    let result = '';
    if (billion > 0) result += (result.length ? ' ' : '') + `${hundreds(billion, map)} Billion`;
    if (million > 0) result += (result.length ? ' ' : '') + `${hundreds(million, map)} Million`;
    if (thousand > 0) result += (result.length ? ' ' : '') + `${hundreds(thousand, map)} Thousand`;
    if (remainder > 0) result += (result.length ? ' ' : '') + hundreds(remainder, map);
    
    return result;
};