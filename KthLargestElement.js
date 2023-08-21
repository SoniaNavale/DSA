arr = [3, 1, 3, 4, 3, -5, -10, -5];
positiveArr = [];
negativeArr = [];
let k = 2;
let count = k;

function kthLargets(k) {
  //positive array parsing
  if (k < positiveArr.length) {
    for (i = positiveArr.length; i > 0; i--) {
      if (positiveArr[i] != null) {
        if (positiveArr[i] > 1 && count != 1) {
          for (j = positiveArr[i]; j < 1; j++) {
            positiveArr[i] -= 1;
            count--;
          }

          if ((positiveArr[i] = 1 && count == 1)) {
            console.log(i);
          }
        }

        count--;
      }
    }
  }
  //negative array parsing
  else {
    pass;
  }
}

function sorting() {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      if (positiveArr[arr[i]] == null) {
        positiveArr[arr[i]] = 1;
      } else {
        positiveArr[arr[i]] = positiveArr[arr[i]] + 1;
      }
    }
    if (arr[i] < 0) {
      arr[i] = Math.abs(arr[i]);
      if (negativeArr[arr[i]] == null) {
        negativeArr[arr[i]] = 1;
      } else {
        negativeArr[arr[i]] = negativeArr[arr[i]] + 1;
      }
    }
  }
  console.log(positiveArr);
  console.log(negativeArr);
}

sorting(arr, positiveArr, negativeArr);
let largets = kthLargets(k, count);
// console.log(largest);
