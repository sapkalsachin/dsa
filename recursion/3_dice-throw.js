/**
 * DP
 * 
 * https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/description/
 * 
 * LEETCODE
 * LEVEL - Medium
 * 
 * You have n dice, and each die has k faces numbered from 1 to k.
 * Given three integers n, k, and target, return the number of possible ways (out of the kn total ways) to roll the dice, so the sum of the face-up numbers equals target. Since the answer may be too large, return it modulo 109 + 7.
 * 
 */




/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    let result = 0;
  const map = new Map();
  const dice = (n, k, up, p) => {
  
      let res = 0
      if(n === 0 && up === 0){
          console.log(p)
  
          map.set(up, )
          return 1;
      }
  
      if(n === 0) return 0
  
      for(let i=1; i <= k && i <= up; i++){
          let ret = 0;
          if(map.has(`${n-1}#${up - i}`)){
              ret = map.get(`${n-1}#${up - i}`)
          }else{
              ret = dice(n-1, k, up - i, [...p, i])
              map.set(`${n-1}#${up - i}`, ret);
  
          }
  
          res += ret
  
          //since answer can go more than integer limit, modulo will reduce the answer
          //eg. if limit = 1000 and ans = 1011, then final ans = 1011 % 1000 => 11
          res = res % 1000000007
      }
  
      return res;
  }
  
  return dice(n, k, target, [])
  
  
  };
  
  