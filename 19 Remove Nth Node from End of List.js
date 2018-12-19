// Given a linked list, remove the n-th node from the end of list and return its head.

//Example
//Input: linked list = 1 -> 2 -> 3 -> 4 -> 5, n = 2
//Output: 1 -> 2 -> 3 -> 5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = (head, n) => {
    let nodeReturn = head;
    let po1 = head;
    let po2 = head;
    
    for(let i = 0; i < n; i++) {
        po2 = po2.next;
    }
    if(!po2) return nodeReturn.next;
    while(po2.next) {
        po1 = po1.next;
        po2 = po2.next;
    }
    po1.next = po1.next.next;
    return nodeReturn;
};