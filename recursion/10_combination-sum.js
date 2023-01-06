/**
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