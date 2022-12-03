const findInReverseSorted = (nums, target) => {
    let [left, right] = [0, nums.length];

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        const [leftNum, rightNum, midNum] = [nums[left], nums[right], nums[mid]];

        if (midNum === target) {
            return mid;
        }

        if (midNum > target) {
            left = mid + 1;
        } else if (midNum < target) {
            right = mid - 1;
        } else {
            left += 1;
            right -= 1;
        }
    }

    return -1;
};
