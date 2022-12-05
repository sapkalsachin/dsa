/*

Find index of an element in nearly sorted array

Input: arr[] =  {10, 3, 40, 20, 50, 80, 70}, key = 40
Output: 2 

*/

const find_num = (nums, target)=>{
    let [left, right] = [0, nums.length - 1];

    while(left <= right){
        const mid = Math.floor(left + (right - left)/2);

        if(target === nums[mid]){
            return mid;
        }
        if(mid > left && nums[mid-1]=== target){
            return mid-1;
        }

        if(mid < right && nums[mid+1] === target){
            return mid + 1;
        }

        if(target > nums[mid]){
            left = mid + 2;
        }else{
            right = mid - 2;
        }
    }
    return -1;
}