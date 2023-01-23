
/**
 * Chunk Transfer Encoding
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/encode-and-decode-strings/
 * @param {string[]} strs
 * @return {string}
 */
var encode = (strs, sb = []) => {
    for (const str of strs) {/* Time O(N) */
        const code = getCode(str);/* Time O(1) */
        const encoding = `${code}${str}`;

        sb.push(encoding); 
    }

    return sb.join(''); /* Time O(N) | Ignore Auxillary Space O(N) */
}

const getCode = (str) => str
    .length
    .toString(2)
    .padStart(8,'0');

/**
 * Chunk Transfer Encoding
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/encode-and-decode-strings/
 * @param {string} str
 * @return {string[]}
 */
var decode = (str, output = []) => {
    for (let left = 0, right = (left + 8),length = 0;
        left < str.length;
        left = (right + length), right = (left + 8)
    ) {                                                         /* Time O(N) */
        const countString = str.slice(left, right);             /*           | Ignore Auxillary Space O(K) */
        length = parseInt(countString, 2);

        const decoding = str.slice(right, (right + length));    /* Time O(K) | Ignore Auxillary Space O(N * K) */
        output.push(decoding);                                  /*           | Ignore Auxillary Space O(N * K) */
    }

    return output;
}