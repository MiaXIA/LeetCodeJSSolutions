// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

//Example
//Input: linked list = 1 -> 2 -> 3 -> 4 -> 5, k = 3
//Output: 3 -> 2 -> 1 -> 4 -> 5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = (head, k) => {
    const listStack = [], preHead = new ListNode();
    preHead.next = head;
    let lastTail = preHead;
    while (head) {
        for(let i = 0; i < k && head; i++) {
            listStack.push(head);
            head = head.next;
        }
        if(listStack.length === k) {
            while(listStack.length > 0) {
                lastTail.next = listStack.pop();
                lastTail = lastTail.next;
            }
            lastTail.next = head;
        }
    }
    return preHead.next;
};