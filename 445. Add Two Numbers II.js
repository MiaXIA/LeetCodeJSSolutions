// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Follow up:
// What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

// Example:
// Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 8 -> 0 -> 7

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = (l1, l2) => {
    const digits1 = [];
    const digits2 = [];
    
    for (let n = l1; n !== null; n = n.next) digits1.push(n.val);
    for (let n = l2; n !== null; n = n.next) digits2.push(n.val);
    
    let prev = null;
    let carry = 0;
    while (digits1.length || digits2.length || carry) {
        const val1 = digits1.pop() || 0;
        const val2 = digits2.pop() || 0;
        const sum = val1 + val2 + carry;
        carry = sum > 9 ? 1 : 0;
        
        const newNode = new ListNode(sum % 10);
        newNode.next = prev;
        prev = newNode;
    }
    return prev;
};