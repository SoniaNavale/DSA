let arr = [3, 1, 3, 4, 3, -5, -10, -5];
let positiveArr = [];
let negativeArr = [];
let k = 7;

function kthLargest(k) {
  // Positive array parsing
  for (let i = positiveArr.length - 1; i >= 0; i--) {
    if (positiveArr[i] !== undefined) {
      if (k <= positiveArr[i]) {
        console.log(i);
        return;
      } else {
        k -= positiveArr[i];
      }
    }
  }

  // Negative array parsing
  for (let i = negativeArr.length - 1; i >= 0; i--) {
    if (negativeArr[i] !== undefined) {
      if (k <= negativeArr[i]) {
        console.log(-i);
        return;
      } else {
        k -= negativeArr[i];
      }
    }
  }

  console.log("k is too large for available elements.");
}

function sorting(arr, positiveArr, negativeArr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      if (positiveArr[arr[i]] === undefined) {
        positiveArr[arr[i]] = 1;
      } else {
        positiveArr[arr[i]]++;
      }
    } else if (arr[i] < 0) {
      let absValue = Math.abs(arr[i]);
      if (negativeArr[absValue] === undefined) {
        negativeArr[absValue] = 1;
      } else {
        negativeArr[absValue]++;
      }
    }
  }
}

sorting(arr, positiveArr, negativeArr);
kthLargest(k);
