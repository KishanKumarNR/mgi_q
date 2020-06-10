let array1 = [];
let array2 = [];

/**
 * @desc function to find if given two integer array contains same digits
 * @param unitArray - Integer array to campare with
 * @param comparer - Integer array to campare from
 * @returns {boolean}
 */
function contains(unitArray, comparer) {
  if (unitArray.length !== comparer.length) {
    return false;
  } else if (unitArray.length === 0 && comparer.length === 0) {
    return true;
  }
  unitArray.sort();
  comparer.sort();
  for (let index = 0; index < comparer.length; index++) {
    if (unitArray[index] !== comparer[index]) {
      return false;
    }
  }
  return true;
}


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter first sequence... e.g., 4567\n', seq1 => {
  array1 = seq1.split("").map(x => parseInt(x));
  console.log(`First Seq I/P : ${array1}!`);
  readline.question('Enter second sequence... e.g., 6754\n', seq2 => {
    array2 = seq2.split("").map(x => parseInt(x));
    console.log(`Second Seq I/P : ${array2}!`);
    readline.close();
  });

});


readline.on("close", () => {
  let computeRes = contains(array1, array2);
  console.log(computeRes ? "Contains same digits" : "Doesn't contains the same digits\n");
})
