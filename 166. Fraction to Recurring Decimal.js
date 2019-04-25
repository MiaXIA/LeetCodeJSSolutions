// Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.
// If the fractional part is repeating, enclose the repeating part in parentheses.

// Example 1:
// Input: numerator = 1, denominator = 2
// Output: "0.5"

// Example 2:
// Input: numerator = 2, denominator = 1
// Output: "2"

// Example 3:
// Input: numerator = 2, denominator = 3
// Output: "0.(6)"

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = (numerator, denominator) => {
    if (numerator == 0) return '0';
	let sign = '';
	if (numerator < 0) {
		sign = '-';
		numerator = -numerator;
	}
	if (denominator == 0) return sign + 'Infinity';
	if (denominator < 0) {
		if (sign == '') sign = '-';
		else sign = '';
		denominator = -denominator;
	}

    let ips = Math.floor(numerator / denominator).toString();
    let rem = numerator % denominator;
    if (rem === 0) return sign + ips;
    
    let fps = '', map = {};
    while (rem > 0) {
		rem *= 10; 
    	if (rem < denominator) fps = fps + '0';
		else {
			let pos = map[rem];
			if (pos == null) {
				let d = rem / denominator >> 0;
				map[rem] = fps.length;
				fps = fps + d.toString();
				rem = rem % denominator;
			} else {
				let nrp = fps.substring(0, pos);
				let rp = fps.substring(pos);
				while (nrp[nrp.length - 1] == rp[rp.length - 1]) {
					rp = rp.substring(rp.length - 1) + rp.substring(0, rp.length - 1);
					nrp = nrp.substring(0, nrp.length - 1);
				}
				fps = `${nrp}(${rp})`;
				return sign + ips + '.' + fps;
			}
		}
	}
	return sign + ips + '.' + fps;
};