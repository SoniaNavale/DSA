matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Output: [[7,4,1],[8,5,2],[9,6,3]]

let outputArray = [];
let count = 0;
let matrixSize = matrix.length;
for (let i = 0; i < matrixSize; i++) {
  let newArray = [];
  for (j = matrix.length - 1; j >= 0; j--) {
    subArray = matrix[j];
    arrayElem = subArray[count];
    newArray.push(arrayElem);
  }
  count++;
  outputArray.push(newArray);
}
console.log(outputArray);
