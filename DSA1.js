//Initial array
//check if ith position has 0
//          if yes-->
//              check if arr[len-i] position is 1
//                  if yes --> swap it
//                  if no --> move the ith element to next position

var arr1 = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0];

function sorting(arr1) {
  let size = arr1.length;

  for (i = 0; i < arr1.length / 2; i++) {
    if (arr1[i] == 0) {
      if (arr1[size - i] == 1) {
        let temp = arr1[size - i];
        let temp1 = arr1[i];
        arr1[i] = temp;
        arr1[size - i] = temp1;
      } else {
        arr1[i] = arr1[i + 1];
      }
    }
  }
  return arr1;
}
sortedArray = sorting(arr1);
console.log(sortedArray);
