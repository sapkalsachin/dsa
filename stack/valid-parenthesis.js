/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length === 0) return false;

    const stack = [];

    for (const ch of s) {
        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch);
        } else if (
            ch === ')' && stack[stack.length - 1] === '(' ||
            ch === ']' && stack[stack.length - 1] === '[' ||
            ch === '}' && stack[stack.length - 1] === '{' 
        ) {
            stack.pop();
        }else{
            stack.push(ch);
        }
    }

    return stack.length === 0;
};