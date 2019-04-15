//Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
//Note: You may not slant the container and n is at least 2.

//Example
//Input: [1, 8, 6, 2, 5, 4, 8, 3, 7]
//Output: 49

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = height => {
    let res = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (right > left) {
        const a = height[left];
        const b = height[right];
        
        const area = Math.min(a, b) * (right - left);
        
        if(area > res) res = area;
        if(b > a) left++;
        else right--;
    }
    return res;
};

//Test
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));