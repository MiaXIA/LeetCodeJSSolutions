// Sort a linked list in O(n log n) time using constant space complexity.

// Example 1:
// Input: 4->2->1->3
// Output: 1->2->3->4

// Example 2:
// Input: -1->5->3->4->0
// Output: -1->0->3->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const merge = (a, b) => {
    let dummyHead = new ListNode(0);
    let cur = dummyHead;
    while (a !== null & b !== null) {
        if (b.val < a.val) {
            cur.next = b;
            b = b.next;
        } else {
            cur.next = a;
            a = a.next;
        }
        cur = cur.next;
    }
    while (a !== null) {
        cur.next = a;
        a = a.next;
        cur = cur.next;
    }
    while (b !== null) {
        cur.next = b;
        b = b.next;
        cur = cur.next;
    }
    return dummyHead.next;
}

var sortList = (head) => {
    if (head === null || head.next === null) return head;
    
    let slow = head, preSlow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        preSlow = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    preSlow.next = null;
    return merge(sortList(head), sortList(slow));
};