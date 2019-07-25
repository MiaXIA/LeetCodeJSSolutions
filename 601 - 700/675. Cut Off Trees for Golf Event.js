// You are asked to cut off trees in a forest for a golf event. The forest is represented as a non-negative 2D map, in this map:
// 0 represents the obstacle can't be reached.
// 1 represents the ground can be walked through.
// The place with number bigger than 1 represents a tree can be walked through, and this positive number represents the tree's height.
// You are asked to cut off all the trees in this forest in the order of tree's height - always cut off the tree with lowest height first. And after cutting, the original place has the tree will become a grass (value 1).
// You will start from the point (0, 0) and you should output the minimum steps you need to walk to cut off all the trees. If you can't cut off all the trees, output -1 in that situation.
// You are guaranteed that no two trees have the same height and there is at least one tree needs to be cut off.

// Example 1:
// Input: 
// [
//  [1,2,3],
//  [0,0,4],
//  [7,6,5]
// ]
// Output: 6
 
// Example 2:
// Input: 
// [
//  [1,2,3],
//  [0,0,0],
//  [7,6,5]
// ]
// Output: -1
 
// Example 3:
// Input: 
// [
//  [2,3,4],
//  [0,0,5],
//  [8,7,6]
// ]
// Output: 6
// Explanation: You started from the point (0,0) and you can cut off the tree in (0,0) directly without walking.

// Hint: size of the given matrix will not exceed 50x50.

/**
 * @param {number[][]} forest
 * @return {number}
 */
var Tree = function(height, row, col) {
    return {
        height, 
        location: new Location(row, col)
    };
}

var Location = function(row, col) {
    return {
        row,
        col
    }
}
var ListNode = function(val) {
    return {
        val,
        next: null
    }
}

var cutOffTree = (forest) => {
    const height = forest.length;
    const width = forest[0].length;
    const trees = [];
    
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (forest[row][col] > 1) {
                trees.push(new Tree(forest[row][col], row, col));
            }
        }
    }
    trees.sort((a, b) => b.height - a.height);
    
    let location = new Location(0, 0);
    let distance = 0;
    
    while (trees.length) {
        let tree = trees.pop();
        let travelled = findTree(forest, tree, location);
        if (travelled >= 0) {
            distance += travelled;
            location = tree.location;
        } else {
            return -1;
        }
    }
    return distance;
};

var findTree = (forest, tree, location) => {
    const visited = {};
    const height = forest.length;
    const width = forest[0].length;
    
    let head = new ListNode([location, 0]);
    let tail = head;
    
    while (head) {
        let [current, distance] = head.val;
        if (current.row < 0 || current.col < 0 || current.row >= height || current.col >= width) {
        } else if (forest[current.row][current.col] == 0) {
        } else if (visited[`${current.row}.${current.col}`]) {
        } else {
            if (tree.location.row == current.row && tree.location.col == current.col) {
                return distance;  
            } else { 
                tail.next = new ListNode([new Location(current.row - 1, current.col), distance + 1]);
                tail = tail.next;
                tail.next = new ListNode([new Location(current.row, current.col + 1), distance + 1]);
                tail = tail.next;
                tail.next = new ListNode([new Location(current.row + 1, current.col), distance + 1]);
                tail = tail.next;
                tail.next = new ListNode([new Location(current.row, current.col - 1), distance + 1]);
                tail = tail.next;
            }
            visited[`${current.row}.${current.col}`] = true;
        }
        head = head.next;
    }
    return -1;
}