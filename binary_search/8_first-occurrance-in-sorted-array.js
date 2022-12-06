/*
findFirstOccurance([1,2,2,2,2,3,4], 2)
expected ouput = 1
*/

const findFirstOccurance = (nums, target) => {
    let [left, right] = [0, nums.length - 1];
    let result = Infinity;
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        const midNum = nums[mid];

        if (midNum === target) {
            result = result < mid ? result : mid;
            right = mid - 1;
            continue;
        }

        if (midNum < target) {
            left = mid + 1;
        } else if (midNum > target) {
            right = mid - 1;
        } else {
            left += 1;
            right -= 1;
        }
    }

    return result === Infinity ? -1 : result;
};
