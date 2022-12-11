/**
 * LEETCODE
 * LEVEL - MEDIUM
 * 
 * 
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 * 
 * Input: head = [1], n = 1
 * Output: []
 * 
 * Input: head = [1,2], n = 1
 * Output: [1]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    const tempNode = new ListNode();
    tempNode.next = head;

    let [slow, fast] = [tempNode, tempNode];

    let counter = 0;
    while(counter < n){
        fast = fast.next;
        counter ++;
    }

    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }

    //slow.next would be the node to be removed

    let prev = slow;
    next = slow.next;
    prev.next = next.next
    next.next = null;

    return tempNode.next;



};