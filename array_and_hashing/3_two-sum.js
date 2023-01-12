/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const tempMap = new Map();
    let result = []
    for(let i=0; i< nums.length; i++){
        const currentNum = nums[i];
        const diff = target - currentNum;

        if(tempMap.has(diff)){
            // return [tempMap.get(diff), i]
            result = [tempMap.get(diff), i]
        }
        else{
            tempMap.set(currentNum, i)
        }
    }
    console.log(tempMap)
    return result
};