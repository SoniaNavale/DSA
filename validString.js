let input = "{}({)}";
// let input = "([{}]{()}[{}])";
let inputSplit = input.split("");
let inputModified = [];
let stack = [];
let flag = 0;

function strToArray(inputSplit) {
  for (i = 0; i < inputSplit.length; i++) {
    inputModified.push(inputSplit[i]);
  }
}

function validStr(inputModified) {
  for (i = inputModified.length; i > 0; i--) {
    inputPopped = inputModified.pop();

    if (inputPopped == "]" || inputPopped == "}" || inputPopped == ")") {
      stack.push(inputPopped);
    } else {
      stackPopped = stack.pop();
      if (inputPopped == stackPopped) {
        flag = 1;
      } else {
        console.log("invalid string");
        break;
      }
    }
  }
  if (flag == 1) {
    console.log("Valid string");
  }
}

strToArray(inputSplit);
validStr(inputModified);
