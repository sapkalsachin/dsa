/*
find how many times an array was rotated

[4,5,6,1,2,3] ==> 3

*/

const findMin = (nums) => {

    var result = 0;
    const len = nums.length;

    let [left, right] = [0, nums.length - 1];
    const prev = (i) => (i + 1)%len;
    const next = (i) => (i + len - 1 )%len;
    
    while(left <= right){
        const mid = Math.floor(left + (right - left)/2);
        const [leftNum, rightNum, midNum] = [nums[left], nums[right], nums[mid]];


        const nextNum = nums[next(mid)];
        const prevNum = nums[prev(mid)];
        

            if(midNum < nextNum && midNum < prevNum){
                result = mid;
                break;
            }
        

        if(leftNum <= midNum){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    return len - result;
}


//ABOVE APPROACH WILL FAIL IF THERE ARE DUPLICATES IN THE ARRAY... Another approach


const findMin2 = (nums) => {

    var result = nums[0]; //since left most element will be always min for sorted array;
    var minIndex = 0;
    const len = nums.length;
    let [left, right] = [0, nums.length - 1];

    while(left <= right){
        const mid = Math.floor(left + (right - left)/2);
        const [leftNum, rightNum, midNum] = [nums[left], nums[right], nums[mid]];

        if(leftNum <= rightNum){
            //result = result > leftNum ? leftNum : result;

            if(result > leftNum){
                result = leftNum;
                minIndex = left;
            }
            break;
        }

        
        //result = result > midNum ? midNum : result;
        if(result > midNum){
            result = midNum;
            minIndex = mid;
        }
        
        if(leftNum <= midNum){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    return len - minIndex;
}
