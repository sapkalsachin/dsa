/**
 * LEETCODE
 * LEVEL - EASY
 * https://leetcode.com/problems/contains-duplicate/
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let numHash = new Map();

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        if (numHash.get(currentNum)) {
            return true;
        } else {
            numHash.set(currentNum, true)
        }
    }
    return false
};