const getFrequencyMap = (nums) => {

    const tempMap = new Map();

    for (const num of nums) {
        let counter = tempMap.get(num) || 0
        tempMap.set(num, counter + 1);
    }

    return tempMap
}


const getMinHeap = (tempMap, k) => {
    const minHeap = new MinPriorityQueue({ priority: ([num, count]) => count });

    for (const [num, count] of tempMap.entries()) {
        minHeap.enqueue([num, count]);

        if (k < minHeap.size()) {
            minHeap.dequeue()
        }
    }

    return minHeap;
}

const getKValues = (minHeap, k) => {
    const result = []
    while (k) {
        const data = minHeap.dequeue();
        console.log(data)
        const [num, count] = data.element;
        result.push(num)
        k--

    }
    return result
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {


    const freqMap = getFrequencyMap(nums);
    const minHeap = getMinHeap(freqMap, k);

    const result = getKValues(minHeap, k)

    return result;
};