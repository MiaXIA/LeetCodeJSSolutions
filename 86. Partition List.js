// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
// You should preserve the original relative order of the nodes in each of the two partitions.

// Example:
// Input: head = 1->4->3->2->5->2, x = 3
// Output: 1->2->2->4->3->5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = (head, x) => {
    if (!head) return head;
    let small = {};
    let smallHead = small;
    let large = {};
    let largeHead = large;
    let root = head;
    
    while (root) {
        if (root.val < x) {
            small.next = new ListNode(root.val);
            small = small.next;
        } else {
            large.next = new ListNode(root.val);
            large = large.next;
        }
        root = root.next;
    }
    small.next = largeHead.next;
    return smallHead.next;
};