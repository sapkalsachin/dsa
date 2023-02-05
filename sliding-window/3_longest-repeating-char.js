/*
LeetCode Logo

424. Longest Repeating Character Replacement

Medium

7.3K

296

Companies

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2

Output: 4

Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:

Input: s = "AABABBA", k = 1

Output: 4

Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".

The substring "BBBB" has the longest repeating letters, which is 4.
*/
const characterReplacement = function(s, k) {
    
    let start = 0;
    let end = 0;
    const freqCountMap = new Map();
    let maxFreq = 0;
    let maxLen = 0;
    
    while(end < s.length){

        const nextCount = (freqCountMap.get(s[end]) || 0) + 1;
        freqCountMap.set(s[end], nextCount);

        maxFreq = Math.max(freqCountMap.get(s[end]), maxFreq);

        //check if distinct char are more than k
        const windowLen = (end - start) + 1;
        if(windowLen - maxFreq > k){
            freqCountMap.set(s[start], freqCountMap.get(s[start]) - 1);
            start ++;
        }

        //count max len
        maxLen = Math.max((end - start) + 1)
        end ++;
    }
    return maxLen;
};
