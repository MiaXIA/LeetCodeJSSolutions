// Remove all elements from a linked list of integers that have value val.

// Example:
// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = (head, val) => {
    const clone = head;
    let root = head;
    let res = [];
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    res = res.filter(_r => _r !== val);
    if (res.length === 0) return null;
    
    for (let i = 0; i < res.length; i++) {
        root.val = res[i];
        if (i < res.length - 1) root = root.next;
        else root.next = null;
    }
    return clone;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = (head, val) => {
    const root = {};
    root.next = head;
    let prev = root;
    let cur = root.next;
    while (cur) {
        if (cur.val === val) {
            prev.next = cur.next;
            cur = cur.next;
        } else {
            prev = cur;
            cur = cur.next;
        }
    }
    return root.next;
};