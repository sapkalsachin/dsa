var transformToLowerChar = (ch) => {
    let res = '';
    if (ch === "" || ch === " ") return res;
    ch = ch.toLowerCase();
    const charCode = ch.charCodeAt(0)
    
    if ((charCode <= 122 && charCode >= 97) || !isNaN(ch) ){
        res = ch
    }
    return res
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    /*while (l < r) {
        while(transformToLowerChar(s[l]) === ''){
            l++
        }

        while(transformToLowerChar(s[r]) === ''){
            r--
        }
        l++;
        r--;
        if(s[l] != s[r]){
            return false
        }
    }*/


    let str = '';
    for(let i=0; i< s.length; i++){
        str += transformToLowerChar(s[i]);
    }

    let l = 0, r = str.length - 1;
    
    while(l<r){
        if(str[l] !== str[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;
};