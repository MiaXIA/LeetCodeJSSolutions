// You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.
// Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

// Example:
// Input:
//  1---2---3---4---5---6--NULL
//          |
//          7---8---9---10--NULL
//              |
//              11--12--NULL
// Output:
// 1-2-3-7-8-11-12-9-10-4-5-6-NULL
// Explanation for the above example:
// Given the following multilevel doubly linked list:
// We should return the following flattened doubly linked list:

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = (head) => {
    let p = head;
    while (p !== null) {
        if (p.child) {
            const n = p.next;
            p.next = p.child;
            let tail = p.child;
            while (tail.next !== null) tail = tail.next;
            tail.next = n;
            if (n) n.prev = tail;
            p.child.prev = p;
            p.child = null;
        }
        p = p.next;
    }
    return head;
};

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = (head) => {
    const traverse = node => {
        if (node === null) return node;
        if (node.child === null) {
            if (node.next === null) return node;
            else return traverse(node.next);
        } else {
            let child = node.child;
            node.child = null;
            let next = node.next;
            node.next = child;
            child.prev = node;
            let childtail = traverse(child);
            if (next !== null) {
                childtail.next = next;
                next.prev = childtail;
                return traverse(next);
            }
            return childtail;
        }
    }
    traverse(head);
    return head;
};