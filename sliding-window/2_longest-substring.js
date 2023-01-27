/*
LeetCode Logo

3. Longest Substring Without Repeating Characters
Medium
31.7K
1.4K
Companies
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/


var lengthOfLongestSubstring = function(str) {

    let [start, end, maxLen] = [0, 0, 0];

    const freqMap = new Map();
    while(end < str.length){
        const nextChar = str[end];
        
        //slide if nextChar is duplicate
        if(start < end && freqMap.has(nextChar)){

            while(start <= freqMap.get(nextChar)){
            let staleChar = str[start];
                freqMap.delete(staleChar);
                start ++;
            }
        }

        if(!freqMap.has(nextChar)){
            freqMap.set(nextChar, end);
        }

        const windowLen = (end - start) + 1;

        maxLen = Math.max(windowLen, maxLen);

        end ++;
    }

    return maxLen;
};
