// Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.
// If possible, output any possible result.  If not possible, return the empty string.

// Example 1:
// Input: S = "aab"
// Output: "aba"

// Example 2:
// Input: S = "aaab"
// Output: ""

// Note:
// S will consist of lowercase letters and have length in range [1, 500].

/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = (S) => {
    let map = {};
    for (let s of S){
        map[s] = map[s] ? [s, map[s][1] + 1] : [s, 1];
    }
    let array = Object.values(map);
    array.sort((a,b) => (b[1] - a[1]));
    let result = "", previous = "";
    for (let i = 0; i < S.length; i++){
        let j = 0, find = false;
        while (j < array.length){
            if (array[j][0] !== previous && array[j][1] > 0){
                find = true;
                break;
            }
            j += 1;
        }
        if (!find) {
            return "";
        }
        result += array[j][0];
        array[j][1] -= 1;
        previous = array[j][0];
        if (j < array.length - 1 && array[j][1] < array[j+1][1]){
            [array[j], array[j+1]] = [array[j+1], array[j]];
        }
    }
    return result;
};