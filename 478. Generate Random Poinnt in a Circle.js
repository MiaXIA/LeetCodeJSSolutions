// Given the radius and x-y positions of the center of a circle, write a function randPoint which generates a uniform random point in the circle.

// Note:
// input and output values are in floating-point.
// radius and x-y position of the center of the circle is passed into the class constructor.
// a point on the circumference of the circle is considered to be in the circle.
// randPoint returns a size 2 array containing x-position and y-position of the random point, in that order.

// Example 1:
// Input: 
// ["Solution","randPoint","randPoint","randPoint"]
// [[1,0,0],[],[],[]]
// Output: [null,[-0.72939,-0.65505],[-0.78502,-0.28626],[-0.83119,-0.19803]]

// Example 2:
// Input: 
// ["Solution","randPoint","randPoint","randPoint"]
// [[10,5,-7.5],[],[],[]]
// Output: [null,[11.52438,-8.33273],[2.46992,-16.21705],[11.13430,-12.42337]]
// Explanation of Input Syntax:
// The input is two lists: the subroutines called and their arguments. Solution's constructor has three arguments, the radius, x-position of the center, and y-position of the center of the circle. randPoint has no arguments. Arguments are always wrapped with a list, even if there aren't any.

/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function(radius, x_center, y_center) {
    this.radius = radius;
    this.x_center = x_center;
    this.y_center = y_center;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
    let x = (2 * Math.random() - 1) * this.radius;
    let y = (2 * Math.random() - 1) * this.radius;
    if (x * x + y * y > Math.pow(this.radius, 2)) return this.randPoint();
    return [x + this.x_center, y + this.y_center];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */