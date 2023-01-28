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
