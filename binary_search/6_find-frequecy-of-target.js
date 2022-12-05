/*
    Given an sorted array and target number, find frequency of a taget number

    input [1,2,2,2,3,4], target = 2
    output 3
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

const findLastOccurance = (nums, target) => {
    let [left, right] = [0, nums.length - 1];
    let result = -Infinity;
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        const midNum = nums[mid];

        if (midNum === target) {
            result = result > mid ? result : mid;
            left = mid + 1;
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

    return result === -Infinity ? -1 : result;
};

const findFrequency = (nums, target) => {
    const firstOccurrence = findFirstOccurance(nums, target);
    const lastOccurance = findLastOccurance(nums, target);

    if(firstOccurrence === -1 || lastOccurance === -1){
        return 0;
    }else{
        return lastOccurance - firstOccurrence + 1;
    }
}