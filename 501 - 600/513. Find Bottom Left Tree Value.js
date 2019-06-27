// Given a binary tree, find the leftmost value in the last row of the tree.

// Example 1:
// Input:
//     2
//    / \
//   1   3
// Output:
// 1

// Example 2: 
// Input:
//         1
//        / \
//       2   3
//      /   / \
//     4   5   6
//        /
//       7
// Output:
// 7
// Note: You may assume the tree (i.e., the given root node) is not NULL.

var findBottomLeftValue = function(root) {
    let value = root.val;
    let prevDepth = 0;
  
    function findLeftMost(node, depth) {
        if (node.left) {
            findLeftMost(node.left, depth + 1);
        }
  
        if (node.right) {
            findLeftMost(node.right, depth + 1);
        }
  
        if (!node.left && !node.right) {
           if (depth > prevDepth) {
              value = node.val;
              prevDepth = depth;
           }
        }
    }
  
    findLeftMost(root, 1);
    return value;
  };