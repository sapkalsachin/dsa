/**
 * Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.

 */

var minWindow = function(setString, targetString) {

    let start = 0;
    let end = 0;
    let totalFound = 0;
    const freqMap = new Map();
    let result = "";


    //baseCase
    if(targetString.length > setString.length){
        return result;
    }
    
    //generate Map
    for(const ch of targetString){
        const count = freqMap.get(ch) || 0;
        freqMap.set(ch, count+1)
    }
    
    while(end < setString.length){
        const currentChar = setString[end];

        if(freqMap.has(currentChar)){
                freqMap.set(currentChar, freqMap.get(currentChar) - 1);

                if(freqMap.get(currentChar) === 0){
                    totalFound += 1;
                }
        }


        //check if all chars are in window
        if(totalFound === freqMap.size){

            //try to shrink the window
            while(start < end){
                const currentChar = setString[start];

                if(freqMap.has(currentChar))
                {
                    const currentCount = freqMap.get(currentChar);
                    if(currentCount === 0){
                        break;
                    }else{
                        freqMap.set(currentChar, currentCount + 1)
                    }
                }

                start +=1;
            }

            const tempSubStr = setString.slice(start, end + 1);

            result = (tempSubStr.length < result.length || result === "")? tempSubStr : result;
        }
        

        end++;
    }

    return result;
};