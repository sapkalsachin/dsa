/*
    LEETCODE
    Level - MEDIUM

    You are given the head of a singly linked-list. The list can be represented as:

    L0 → L1 → … → Ln - 1 → Ln
    Reorder the list to be on the following form:

    L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
    You may not modify the values in the list's nodes. Only nodes themselves may be changed.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */

const reverse = (head)=>{
    let [prev, current, next] = [null, head, null]

    while(current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

const getMid = (head)=>{

    let [slow, fast] = [head, head];

    while(fast?.next){
        slow = slow.next;
        fast = fast.next.next
    }

    return slow;
}

const reorder = (l1, l2)=>{
   let [first, second, next ] = [l1, l2, null];
   while(second.next){
       next = first.next;
       first.next = second;
       first = next;

       next = second.next;
       second.next = first;
       second = next;
   }
 
}
var reorderList = function(head) {
   //console.log(reverse(head))
   const mid = getMid(head);
   l2 = reverse(mid);

   console.log(head);
   console.log(l2);

   reorder(head, l2)

};

