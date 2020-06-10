/**
 * @description function to calculate
 * @param arr
 * @returns {number}
 */
function getMaxProfit(arr) {
    var minIndex = 0;
    var maxIndex = 1;
    var currMin = 0;
    var maxProfit = 0;

    if(arr.length < 2) {
        throw new Error("Need atleast two time periods to be profitable!");
    }

    for(var i = 1; i < arr.length; i++) {

        // new current min.
        if(arr[i] < arr[currMin]) {
            currMin = i;
        }

        // new best profit
        if(arr[maxIndex] - arr[minIndex] < arr[i] - arr[currMin]) {
            maxIndex = i;
            minIndex = currMin;
        }

    }

    maxProfit  = arr[maxIndex] - arr[minIndex];
    console.log("[ ", arr[minIndex], arr[maxIndex], "]")
    console.log("O/P: Maxprofit is \t", maxProfit);
    return maxProfit;
}

let sales = [25,3,5,54,23,100,1];

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Enter sales string ... e.g., 25,3,5,54,23,100,1 \n\n')

readline.on("line", res => {
    sales = res.split(",").map(x => parseInt(x));
    readline.close()
});

readline.on("close", () => {
    console.log(getMaxProfit(sales));
})