/**
 * @description function to find maximum profit given a buying price of weeks shares 
 * @param arr week's buying price
 * @returns {number}
 */
function getMaxProfit(arr) {
    var minIndex = 0;
    var maxIndex = 1;
    var minPrice = 0;
    var maxProfit = 0;

    if(arr.length < 2) {
        console.log("Need atleast 2 data items to continue!");
        throw new Error("Need atleast 2 data items to continue!");
    }

    for(var i = 1; i < arr.length; i++) {
        if(arr[i] < arr[minPrice]) {
            minPrice = i;
        }
        if(arr[maxIndex] - arr[minIndex] < arr[i] - arr[minPrice]) {
            maxIndex = i;
            minIndex = minPrice;
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