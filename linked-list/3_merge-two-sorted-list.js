/* 
    //LEETCODE
    //EASY
    
    You are given the heads of two sorted linked lists list1 and list2.
    Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
    Return the head of the merged linked list.
*/



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    console.log("list 1 ka head", list1);
    console.log("list 2 ka head", list2);

    const tempHead = new ListNode();
    let tail = tempHead;
    console.log(JSON.stringify(list1));
    while(list1 && list2){


        if(list1.val <= list2.val){
            tail.next = list1;
            list1 = list1.next;
        }else{
            tail.next = list2;
            list2 = list2.next;
        }
            tail = tail.next;
    }
       //if both lists are not of same length, push all remaining nodes of larger list
       tail.next = list1 || list2;

        
       //now tempHead was a temporary pointer for the head. so tempHead.next will the actual head of resultant list
       return tempHead.next;
    
};