// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

//Example
//Input: [0,1,0,2,1,0,1,3,2,1,2,1]
//Output: 6

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = height => {
    var res = 0;
    var top = height.length, i = 0, temp = 0, maxi = 0;
    
    for(; i < top; i++) {
        if(height[i] > temp) {
            temp = height[i];
            maxi = i;
        }
    }
    for(i = 0, temp = 0; i < maxi; i++) {
        if(height[i] > temp) temp = height[i];
        else res += temp - height[i];
    }
    for(i = top - 1, temp = 0; i > maxi; i--) {
        if(height[i] > temp) temp = height[i];
        else res += temp - height[i];
    }
    return res;
};