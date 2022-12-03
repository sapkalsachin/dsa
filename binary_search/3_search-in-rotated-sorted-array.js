/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let [left, right] = [0, nums.length - 1];

  while (left <= right) {
    const [leftNum, rightNum] = [nums[left], nums[right]];

    const mid = Math.floor((left + right) / 2);
    const guess = nums[mid];
    if (guess === target) {
      return mid;
    }
    const isAscending = leftNum <= guess;

    if (isAscending) {
      const isSmall = target <= guess;
      const isInRange = leftNum <= target;

      if (isSmall && isInRange) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    const isDescending = leftNum > guess;
    if (isDescending) {
      const isGreater = target >= guess;
      const isInRange = target <= rightNum;

      if (isGreater && isInRange) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
