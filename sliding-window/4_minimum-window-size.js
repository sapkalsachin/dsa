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