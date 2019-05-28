// Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.
// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

// Example 1:
// Input: 1->2->3->4->5->NULL
// Output: 1->3->5->2->4->NULL

// Example 2:
// Input: 2->1->3->5->6->4->7->NULL
// Output: 2->3->6->7->1->5->4->NULL

// Note:
// The relative order inside both the even and odd groups should remain as it was in the input.
// The first node is considered odd, the second node even and so on ...

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
var oddEvenList = (head) =>{
    const odd = new ListNode(0);
    let o = odd;
    const even = new ListNode(0);
    let e = even;
    let flag = true;
    
    while (head) {
        if (flag) {
            o.next = head;
            o = o.next;
        } else {
            e.next = head;
            e = e.next;
        }
        flag = !flag;
        head = head.next;
    }
    o.next = even.next;
    e.next = null;
    return odd.next;
};