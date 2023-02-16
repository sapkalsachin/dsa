var moveZeroes = (nums) => {
    let [ left, right ] = [ 0, 0 ];

    while (right < nums.length) {
        const canSwap = (nums[right] !== 0)
        if (canSwap) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }

        right++;
    }
};