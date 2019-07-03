// Given the coordinates of four points in 2D space, return whether the four points could construct a square.
// The coordinate (x,y) of a point is represented by an integer array with two integers.

// Example:
// Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
// Output: True
 
// Note:
// All the input integers are in the range [-10000, 10000].
// A valid square has four equal sides with positive length and four equal angles (90-degree angles).
// Input points have no order.

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
const distance = (p1, p2) => {
    return Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));
}

var validSquare = (p1, p2, p3, p4) => {
    let lengths = [];
    
    lengths.push(distance(p1, p2));
    lengths.push(distance(p1, p3));
    lengths.push(distance(p1, p4));
    lengths.push(distance(p2, p3));
    lengths.push(distance(p2, p4));
    lengths.push(distance(p3, p4));
    
    lengths = lengths.sort((a, b) => a - b);
    if (lengths[3] === lengths[4]) return false;
    if (lengths[4] !== lengths[5]) return false;
    if (!(lengths[0] === lengths[1] && lengths[1] === lengths[2] && lengths[2] === lengths[3])) return false;
    
    return true;
};