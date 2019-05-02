// Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.
// Calling next() will return the next smallest number in the BST.

// Example:
// BSTIterator iterator = new BSTIterator(root);
// iterator.next();    // return 3
// iterator.next();    // return 7
// iterator.hasNext(); // return true
// iterator.next();    // return 9
// iterator.hasNext(); // return true
// iterator.next();    // return 15
// iterator.hasNext(); // return true
// iterator.next();    // return 20
// iterator.hasNext(); // return false
 
// Note:
// next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
// You may assume that next() call will always be valid, that is, there will be at least a next smallest number in the BST when next() is called.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class BSTIterator {
    constructor(root) {
      this.result = [];
      this.inOrder(root);
    }
  
    inOrder(root) {
      if (!root) return [];
      if (root.left) this.inOrder(root.left);
      this.result.push(root.val);
      if (root.right) this.inOrder(root.right);
    }
  
    next() {
      if (this.hasNext()) {
        return this.result.shift();
      }
    }
  
    hasNext() {
      return this.result.length > 0 ? true : false;
    }
  }
  
  /** 
   * Your BSTIterator object will be instantiated and called as such:
   * var obj = new BSTIterator(root)
   * var param_1 = obj.next()
   * var param_2 = obj.hasNext()
   */