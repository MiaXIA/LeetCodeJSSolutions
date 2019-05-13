// Given a singly linked list, determine if it is a palindrome.

// Example 1:
// Input: 1->2
// Output: false

// Example 2:
// Input: 1->2->2->1
// Output: true

// Follow up:
// Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = (head) => {
    if (!head) return true;
    const r = [];
    while (head) {
        r.push(head.val);
        head = head.next;
    }
    for (let i = 0; i < r.length / 2; i++) {
        if (r[i] !== r[r.length - 1 - i]) return false;
    }
    return true;
};