// Given a linked list, rotate the list to the right by k places, where k is non-negative.

//Examples
//Input: 1->2->3->4->5->NULL, k = 2
//Output: 4->5->1->2->3->NULL
//Explanation:
//rotate 1 steps to the right: 5->1->2->3->4->NULL
//rotate 2 steps to the right: 4->5->1->2->3->NULL

//Input: 0->1->2->NULL, k = 4
//Output: 2->0->1->NULL
//Explanation: 
//rotate 1 steps to the right: 2->0->1->NULL
//rotate 2 steps to the right: 1->2->0->NULL
//rotate 3 steps to the right: 0->1->2->NULL
//rotate 4 steps to the right: 2->0->1->NULL

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
var rotateRight = (head, k) => {
    const root = {};
    root.next = head;
    let first = root;
    let second = root;
    let clone = head;
    let len = 0;
    
    while (clone) {
      clone = clone.next;
      len++;
    }
    k = k % len;
    
    while (k--) {
      second = second.next;
    }
    while (second.next) {
      first = first.next;
      second = second.next;
    }
    
    if (first !== second) {
      const next = first.next;
      first.next = null;
      second.next = root.next;
      root.next = next;
    }
    
    return root.next;
  };