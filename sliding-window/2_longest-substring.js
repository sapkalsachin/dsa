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
