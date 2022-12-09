//LEETCODE
//EASY

/*
    Given the head of a singly linked list, reverse the list, and return the reversed list.

    Input: head = [1,2,3,4,5]
    Output: [5,4,3,2,1]
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return head;

    let [prev, current, oldNext] = [null, head, null];


    while(current){
        oldNext = current.next;
        current.next = prev;
        prev = current;
        current = oldNext;
    }

    return prev;
};