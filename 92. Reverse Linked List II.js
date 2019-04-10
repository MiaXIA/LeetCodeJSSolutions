// Reverse a linked list from position m to n. Do it in one-pass.
// Note: 1 ≤ m ≤ n ≤ length of list.

// Example:
// Input: 1->2->3->4->5->NULL, m = 2, n = 4
// Output: 1->4->3->2->5->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = (head, m, n) => {
    if (!head) return head;
    let clone = head;
    const prev = head;
    let r = [];
    let i = 0;
    
    while (head && i < n) {
        if (i >= m - 1) {
            r.push(head.val);
        }
        head = head.next;
        i++;
    }
    r = r.reverse();
    
    i = 0;
    let j = 0;
    while(clone && i < n) {
        if ( i >= m -1) {
            clone.val = r[j++];
        }
        clone = clone.next;
        i++;
    }
    return prev;
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = (head, m, n) => {
    const root = {};
    root.next = head;
    let first = root;
    let second = root;
    let firstP = null;
    while (m-- && n--) {
        if (m === 0) firstP = first;
        first = first.next;
        second = second.next;
    }
    while (n--) {
        second = second.next;
    }
    
    let prev = second.next;
    while (first !== second) {
        const next = first.next;
        first.next = prev;
        prev = first;
        first = next;
    }
    first.next = prev;
    firstP.next = first;
    
    return root.next;
};
