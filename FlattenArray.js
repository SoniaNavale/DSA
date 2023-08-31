// let arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6, 7, 8, 9],
//     [10, 11, 12, 13, 14, 15]
// ];
const example = [1, 2, 3, 4, [1, 2], [3, 4, [3, 4]], 5];
let newArr = [];
function arrayFun(example) {
  for (let i = 0; i < example.length; i++) {
    if (Array.isArray(example[i])) {
      arrayFun(example[i]);
      console.log("upper");
    } else {
      newArr.push(example[i]);
      console.log("hi");
    }
  }
}
arrayFun(example);
console.log(newArr);
