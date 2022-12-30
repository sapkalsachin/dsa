
/**
 * LEETCODE: Medium
 * T(MxN) --> M = letter at first key, N = letter at second key
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
 * A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 * 
 * Example 1:
 * 
 * Input: digits = "23"
 * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * 
 * Example 2:
 * 
 * Input: digits = ""
 * Output: []
 * 
 * 
 * Example 3:
 * 
 * Input: digits = "2"
 * Output: ["a","b","c"]
 * 
 */

const pad = (p, up, res=[])=>{

    if(up==="")
    {
      if(p!== "")res.push(p)
      return res
      
    }
  
    const digit = parseInt(up[0]);
  
    if(digit <= 1) return res
  
    const startCharCode = digit > 7 ?((digit - 2)* 3) + 1 : ((digit - 2)* 3);
    const endCharCode = digit === 9 || digit === 7 ? startCharCode + 4: startCharCode + 3
    
    for(let i = startCharCode; i < endCharCode; i++){
      const ch = String.fromCharCode('a'.charCodeAt(0)+ (i));
      if(ch.charCodeAt() > 'z'.charCodeAt()) break;
      pad(p+ch, up.substring(1), res)
    }
  
   return res;
  }
  
  
  /**
   * @param {string} digits
   * @return {string[]}
   */
  var letterCombinations = function(digits) {
      return pad("", digits, [])
  };