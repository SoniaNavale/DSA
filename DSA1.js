var arr1 = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0];
function sorting(arr1) {
  let size = arr1.length;

  for (i = 0; i < arr1.length / 2; i++) {
    if (arr1[i] == 0) {
      console.log("upper", arr1[i], arr1[size - i]);
      if (arr1[size - i] == 1) {
        let temp = arr1[size - i];

        let temp1 = arr1[i];
        console.log("here", temp, temp1);
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
