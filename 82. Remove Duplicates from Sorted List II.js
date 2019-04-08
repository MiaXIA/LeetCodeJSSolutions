// Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

// Example 1:
// Input: 1->2->3->3->4->4->5
// Output: 1->2->5

// Example 2:
// Input: 1->1->1->2->3
// Output: 2->3

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
var deleteDuplicates = (head) => {
    if (!head) return head;
    let arr = [];
    const root = head;
    let clone = head;
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    const dup = arr.filter((v, i, _arr) => _arr.indexOf(v) !== i);
    arr = arr.filter(_a => !dup.includes(_a));
    if (arr.length === 0) return null;
    
    let i = 0;
    while (clone && i < arr.length - 1) {
        clone.val = arr[i++];
        clone = clone.next;
    }
    clone.val = arr[arr.length - 1];
    clone.next = null;
    
    return root;
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
 * @return {ListNode}
 */
var deleteDuplicates = (head) => {
    if (!head) return head;
    let node = {};
    const root = node;
    node.next = head;
    let flag = false;
    
    while(head.next) {
        if (head.val === head.next.val) {
            head.next = head.next.next;
            flag = true;
        } else {
            if (flag) {
                node.next = head.next;
                flag = false;
            } else {
                node = head;
            }
            head = head.next;
        }
    }
    if (flag) {
        node.next = null;
    }
    return root.next;
};