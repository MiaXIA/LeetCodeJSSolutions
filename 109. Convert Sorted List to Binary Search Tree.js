// Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:
// Given the sorted linked list: [-10,-3,0,5,9],
// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
//       0
//      / \
//    -3   9
//    /   /
//  -10  5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = (head) => {
    const nodes = [];
    while (head) {
        nodes.push(head.val);
        head = head.next;
    }
    
    const tree = (arr) => {
        if (arr.length === 0) return null;
        const node = new TreeNode();
        if (arr.length === 1) {
            node.val = arr[0];
        } else {
            const mid = parseInt(arr.length / 2, 10);
            node.val = arr[mid];
            node.left = tree(arr.slice(0, mid));
            node.right = tree(arr.slice(mid + 1));
        }
        return node;
    }
    const root = tree(nodes);
    return root;
};