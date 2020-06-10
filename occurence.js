

/**
 * @desc to find the frequency of substring occurences in a given string
 * @param string
 * @param subString
 * @param allowOverlapping
 * @returns {number|*}
 */
function findSubstr(string, subString) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var count = 0,
        pos = 0,
        substrLen = subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++count;
            pos += substrLen;
        } else {
            break;
        }
    }
    return count;
}

let str, substr = "";

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('Enter string... e.g.,\n', res => {
    str = res;
    readline.question('Enter substring... e.g., 6754\n', res1 => {
        substr = res1;
        readline.close();
    });
});

readline.on("close", () => {
    console.log("O/P : Number of times substring repeated is ", findSubstr(str, substr))
})