//Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

//Example
//Input:
// [
//     1 -> 4 -> 5,
//     1 -> 3 -> 4,
//     2 -> 6
// ]
//Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = lists => {
    if (lists === null || lists.length < 1) return null;
    if (lists.length > 1) {
        let middleLength = Math.floor(lists.length / 2);
        let leftArr = lists.slice (0,middleLength);
        let rightArr = lists.slice( middleLength, lists.length+1);
        return mergeTwoLists( mergeKLists(leftArr),mergeKLists(rightArr));
    }
    return lists[0];
}

var mergeTwoLists = (l1,l2) => {
    if(l1 === null || l1.length < 1) return l2;
    if(l2 === null || l2.length < 1) return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next,l2);
        return l1;
    }
    else {
        l2.next = mergeTwoLists(l1,l2.next);
        return l2;
    }   
}