// There is a room with n lights which are turned on initially and 4 buttons on the wall. After performing exactly m unknown operations towards buttons, you need to return how many different kinds of status of the n lights could be.
// Suppose n lights are labeled as number [1, 2, 3 ..., n], function of these 4 buttons are given below:
// Flip all the lights.
// Flip lights with even numbers.
// Flip lights with odd numbers.
// Flip lights with (3k + 1) numbers, k = 0, 1, 2, ...
 
// Example 1:
// Input: n = 1, m = 1.
// Output: 2
// Explanation: Status can be: [on], [off]
 
// Example 2:
// Input: n = 2, m = 1.
// Output: 3
// Explanation: Status can be: [on, off], [off, on], [off, off]
 
// Example 3:
// Input: n = 3, m = 1.
// Output: 4
// Explanation: Status can be: [off, on, off], [on, off, on], [off, off, off], [off, on, on].
 
// Note: n and m both fit in range [0, 1000].

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flipAll = (lights) => {
    var newLights = lights.slice();
    for (let i = 0; i < newLights.length; i++) {
        if (newLights[i] === 1) newLights[i] = 0;
        else newLights[i] = 1;
    }
    return newLights;
};

var flipEven = (lights) => {
    var newLights = lights.slice();
    for (let i = 0; i < newLights.length; i++) {
        if ((i + 1) % 2 === 0) {
            if (newLights[i] === 1) newLights[i] = 0;
            else newLights[i] = 1;
        }
    }
    return newLights;
};

var flipOdd = (lights) =>{
    var newLights = lights.slice();
    for (let i = 0; i < newLights.length; i++) {
        if ((i + 1) % 2 !== 0) {
            if (newLights[i] === 1) newLights[i] = 0;
            else newLights[i] = 1;
        }
    }
    return newLights;
};

var flipNumber = (lights) => {
    var newLights = lights.slice();
    for (let i = 0; i < newLights.length; i++) {
        if ((i + 1) % 3 === 1) {
            if (newLights[i] === 1) newLights[i] = 0;
            else newLights[i] = 1;
        }
    }
    return newLights;
};

var deleteDuplicatedCase = (cases) => {
    var newCases = cases.slice();
    for (let i = 0; i < newCases.length; i++) {
        for (let j = i + 1; j < newCases.length; j++) {
            let isSame = true;
            for (let index = 0; index < newCases[i].length; index++) {
                if (newCases[i][index] !== newCases[j][index]) {
                    isSame = false;
                }
            }
            if (isSame) {
                newCases.splice(j, 1);
                j--;
            }
        }
    }
    return newCases;
};

var flipLights = (n, m) => {
    var lights = []
    var cases = []
    if (m === 0) return 1;
    for (let i = 0; i < n; i++) lights.push(1);
    for (let i = 0; i < m; i++) {
        const casesLength = cases.length
        if (i === 0) {
            cases.push(flipAll(lights));
            cases.push(flipEven(lights));
            cases.push(flipOdd(lights));
            cases.push(flipNumber(lights));
        } else {
            for (let j = 0; j < casesLength; j++) {
                cases.push(flipAll(cases[j]));
                cases.push(flipEven(cases[j]));
                cases.push(flipOdd(cases[j]));
                cases.push(flipNumber(cases[j]));
            }
        }
        cases.splice(0, casesLength)
        cases = deleteDuplicatedCase(cases).slice();
    }
    return cases.length;
};