// Given a linked list, swap every two adjacent nodes and return its head.

//Example
//Input: 1 -> 2 -> 3 -> 4
//Output: 2 -> 1 -> 4 -> 3

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
var swapPairs = head => {
    if(!head || !head.next) return head;
    let node = head, prev = null, newHead = null;
    
    while(node && node.next) {
        let next = node.next.next;
        let a = node;
        let b = node.next;
        b.next = a;
        a.next = next;
        
        if(prev !== null) prev.next = b;
        if(newHead === null) newHead = b;
        
        prev = a;
        node = next;
    }
    return newHead;
};