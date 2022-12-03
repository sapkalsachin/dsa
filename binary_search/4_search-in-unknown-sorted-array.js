const findInReverseSorted = (nums, target) => {
  let [left, right] = [0, nums.length];

  let ascending = false;
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  } else {
    ascending = nums[0] < nums[1] ? true : false;
  }

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    const [leftNum, rightNum, midNum] = [nums[left], nums[right], nums[mid]];

    if (midNum === target) {
      return mid;
    }

    if (ascending) {
      if (midNum > target) {
        left = mid + 1;
      } else if (midNum < target) {
        right = mid - 1;
      } else {
        left += 1;
        right -= 1;
      }
    } else {
      if (midNum < target) {
        left = mid + 1;
      } else if (midNum > target) {
        right = mid - 1;
      } else {
        left += 1;
        right -= 1;
      }
    }
  }

  return -1;
};
