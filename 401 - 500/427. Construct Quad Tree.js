// We want to use quad trees to store an N x N boolean grid. Each cell in the grid can only be true or false. The root node represents the whole grid. For each node, it will be subdivided into four children nodes until the values in the region it represents are all the same.
// Each node has another two boolean attributes : isLeaf and val. isLeaf is true if and only if the node is a leaf node. The val attribute for a leaf node contains the value of the region it represents.
// Your task is to use a quad tree to represent a given grid. The following example may help you understand the problem better:
// Given the 8 x 8 grid below, we want to construct the corresponding quad tree:
// It can be divided according to the definition above:
// The corresponding quad tree should be as following, where each node is represented as a (isLeaf, val) pair.
// For the non-leaf nodes, val can be arbitrary, so it is represented as *.
// Note:
// N is less than 1000 and guaranteened to be a power of 2.
// If you want to know more about the quad tree, you can refer to its wiki.

/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = (grid) => {
    const tree = _grid => {
        const node = new Node();
        const isAllOne = _grid.every(_g => _g.every(v => v === 1));
        const isAllZero = _grid.every(_g => _g.every(v => v === 0));
        
        if (isAllOne) {
            node.val = true;
            node.isLeaf = true;
        } else if (isAllZero) {
            node.val = false;
            node.isLeaf = true;
        } else {
            let _len = _grid.length;
            let left = _grid.map(_g => _g.slice(0, _len / 2));
            let right = _grid.map(_g => _g.slice(_len / 2));
            node.topLeft = tree(left.slice(0, _len / 2));
            node.topRight = tree(right.slice(0, _len / 2));
            node.bottomLeft = tree(left.slice(_len / 2));
            node.bottomRight = tree(right.slice(_len / 2));
            node.isLeaf = false;
            node.val = true;
        }
        return node;
    }
    const head = tree(grid);
    return head;
};