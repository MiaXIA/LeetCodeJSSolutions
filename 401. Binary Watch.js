// A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).
// Each LED represents a zero or one, with the least significant bit on the right.
// X X O O
// X O O X X O
// For example, the above binary watch reads "3:25".
// Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.

// Example:
// Input: n = 1
// Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
// Note:
// The order of output does not matter.
// The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
// The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = (num) => {
    if (num === 0) return ["0:00"];
    const times = [8 * 60, 4 * 60, 2 * 60, 1 * 60, 32, 16, 8, 4, 2, 1];
    const res = [];
    const func = (n, arr, _res = []) => {
        if (n === 0) {
            if (_res.filter(a => a < 60).reduce((a, b) => a + b, 0) >= 60) return;
            const _h = _res.reduce((a, b) => a + b, 0);
            if (_h >= 12 * 60) return;
            res.push(_h);
        }
        for (let i = 0; i < arr.length; i++) {
            func(n - 1, arr.slice(i + 1), _res.concat(arr[i]));
        }
    }
    func(num, times);
    res.sort((a, b) => a - b);
    const translate = t => {
        const h = parseInt(t / 60, 10);
        const m = t - 60 * h;
        if (m < 10) return `${h}:0${m}`;
        return `${h}:${m}`;
    }
    return res.map(_t => translate(_t));
};

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = (num) => {
    let res = [];
    const getBitCount = n => {
        let count = 0;
        while (n > 0) {
            n = n & (n - 1);
            count++;
        }
        return count;
    }
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 60; j++) {
            if (getBitCount(i << 6 | j) === num) {
                res.push(`${i}:${j < 10 ? ('0' + j) : j}`);
            }
        }
    }
    return res;
};