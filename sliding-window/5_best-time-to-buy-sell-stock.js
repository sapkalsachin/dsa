/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let [start, end, maxProfit] = [0, 1, 0];

    while(end < prices.length){

        //slide window if lower price is observed
        if(prices[end] <= prices[start]){
            start = end
        }

        //get max of last and current maxProfit
        const window = prices[end] - prices[start];
        maxProfit = Math.max(window, maxProfit);


        //keep checking future price
        end++;
    }
    return maxProfit
};