// i/p- my name is ankit jain
//      0    1   2   3     4
// o/p- My Name Is Ankit Jain

const inp = "my name is ankit jain";
let inpArr = inp.split(" ");
console.log(inpArr);

function capitalize(inpArr) {
  for (let i = 0; i < inpArr.length; i++) {
    let capital = inpArr[i].toUpperCase();
    console.log(capital);
  }
}
capitalize(inpArr);
