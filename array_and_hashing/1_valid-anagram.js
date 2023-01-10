/**
 * LEETCODE
 * LEVEL - EASY
 * https://leetcode.com/problems/valid-anagram/
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const charMap = new Map();

    if (s === t) return true;
    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        if (charMap.get(currentChar)) {
            const charCount = charMap.get(currentChar);
            charMap.set(currentChar, charCount + 1)
        } else {
            charMap.set(currentChar, 1);
        }
    }

    for (let j = 0; j < t.length; j++) {
        const currentChar = t[j];
        if (charMap.get(currentChar)) {
            charMap.set(currentChar, charMap.get(currentChar) - 1);

            if (charMap.get(currentChar) <= 0) {
                charMap.delete(currentChar);
            }
        }
    }

    return charMap.size === 0
};