/*

    LEVEL: medium
    
    Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

    [4,5,6,7,0,1,2] if it was rotated 4 times.
    [0,1,2,4,5,6,7] if it was rotated 7 times.
    
    Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

    Given the sorted rotated array nums of unique elements, return the minimum element of this array.

    You must write an algorithm that runs in O(log n) time.
    
    Input: nums = [3,4,5,1,2]
    Output: 1
    Explanation: The original array was [1,2,3,4,5] rotated 3 times.
*/



const findMin = (nums) => {

    var result = nums[0]; //since left most element will be always min for sorted array;


    let [left, right] = [0, nums.length - 1];

    while(left <= right){
        const mid = Math.floor(left + (right - left)/2);
        const [leftNum, rightNum, midNum] = [nums[left], nums[right], nums[mid]];

        if(leftNum <= rightNum){
            result = result > leftNum ? leftNum : result;
            break;
        }
        result = result > midNum ? midNum : result;
        if(leftNum <= midNum){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    return result;
}

console.log(findMin([4,5,6,7,0,1,2]))