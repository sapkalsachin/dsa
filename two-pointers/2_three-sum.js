const getTriplet = (nums, start, results)=>{
    
    const target = - nums[start];
    let left = start + 1;
    let right = nums.length-1;

    while(left < right){

        const sum = nums[left] + nums[right];

        if(sum === target){
            results.push([-target, nums[left], nums[right]]);

            left ++;
            right --;

            while(nums[left] === nums[left - 1 ]) left ++;
            while(nums[right] === nums[right + 1]) right --;

        }else{

            if(sum < target){
                left++;
            }else{
                right--
            }
        }
    }
        
}

var threeSum = function(nums) {

    //sort array
    nums.sort((a,b)=> a-b);
    const results = [];
    for(let start = 0; start < nums.length - 2 ; start++){
            if(nums[start] === nums[start-1]) continue;
        
            getTriplet(nums, start, results);
    }

    return results;
};