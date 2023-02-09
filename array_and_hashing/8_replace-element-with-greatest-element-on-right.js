var replaceElements = (arr, max = -1) => {  
    for (let i = (arr.length - 1); (0 <= i); i--) {/* Time O(N) */
        const num = arr[i];

        arr[i] = max;
        max = Math.max(max, num);
    }

    return arr;
};