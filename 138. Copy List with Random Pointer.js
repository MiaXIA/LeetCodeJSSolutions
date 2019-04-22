// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.
// Return a deep copy of the list.

// Example 1:
// Input:
// {"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}
// Explanation:
// Node 1's value is 1, both of its next and random pointer points to Node 2.
// Node 2's value is 2, its next pointer points to null and its random pointer points to itself.
 
// Note:
// You must return the copy of the given head as a reference to the cloned list.

/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = (head) => {
    if (!head) return head;
    var clonedHead = new Node(head.val, null, null);
    var newHead = clonedHead;
    var oldHead = head;
    var nodeJustBelow = new Map();
    
    nodeJustBelow.set(oldHead, newHead);
    while (oldHead.next) {
        newHead.next = new Node(oldHead.next.val, null, null);
        newHead = newHead.next;
        oldHead = oldHead.next;
        nodeJustBelow.set(oldHead, newHead);
    }
    oldHead = head;
    newHead = clonedHead;
    
    while (oldHead && newHead) {
        newHead.random = oldHead.random ? nodeJustBelow.get(oldHead.random) : null;
        oldHead = oldHead.next;
        newHead = newHead.next;
    }
    return clonedHead;
};