/**
 * 
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
 * The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency
 * of at least one of the chosen numbers is different.
 * The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
 * 
 * 
 * Example 1
 * 
 * Input: candidates = [2,3,6,7], target = 7
 * Output: [[2,2,3],[7]]
 * Explanation:
 * 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
 * 7 is a candidate, and 7 = 7.
 * These are the only two combinations.
 * 
 * 
 * Example 2:
 * 
 * Input: candidates = [2,3,5], target = 8
 * Output: [[2,2,2,2],[2,3,3],[3,5]]
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(elements, target) {
    

    const result = [];
    const dfs = (i, currentArr, total ) => {
    
    
        //if total is matched
        if(total === target){
            result.push(currentArr);
            return;
        }
    
    
        //if total is greater than target OR
        //if we are done with skipping all elements
        if(total > target || i >= elements.length){
            return
        }
    
    
        //we have two choices... 
        //1 add current element
        //2 avoide current element and add the next element in next decision
    
        const nextArr = [...currentArr]
        nextArr.push(elements[i]);
    
        //add current ---> ie. left part of tree
        dfs(i, nextArr, total + elements[i]);
    
        //avoid current ---> move current element pointer to next element
        dfs(i+1, currentArr, total)   
    }
    
    dfs(0, [], 0);
    
    return result
    };