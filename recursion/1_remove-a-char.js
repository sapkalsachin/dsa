
/*
PRACTICE QUESTION
Remove a char from a string using recursion

    example1:
    input: "aabcd", "a"
    output: "bcd"    
*/

const skip = (str, ans, skipChar, i)=>{
    if(i === str.length){
        return ans;
    }

    if(str[i] !== skipChar){
        ans += str[i];
    }

    return skip(str, ans, skipChar, i+1)
}


