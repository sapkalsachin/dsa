/**
 * 
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 * 
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    const set = new Set(nums);


    let maxCount = 0;

    for(const num of nums){
        if(set.has(num-1)){
            continue;            
        }    
        var [currentNum, count] = [num, 0]
        const hasNext = (n)=> set.has(n)
        while(hasNext(currentNum)){
            ++currentNum;
            ++count;        
        }

        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
};
