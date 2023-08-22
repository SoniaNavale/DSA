let input = "(])";
// let input = "([{}]{()}[{}])";
let inputSplit = input.split("");
let inputModified = [];
let stack = [];
let flag = 0;
let mapping = {
  "}": "{",
  ")": "(",
  "]": "[",
};

function strToArray(inputSplit) {
  for (i = 0; i < inputSplit.length; i++) {
    inputModified.push(inputSplit[i]);
  }
  console.log(inputModified);
}

function validStr(inputModified) {
  for (i = inputModified.length - 1; i >= 0; i--) {
    inputPopped = inputModified.pop();

    if (inputPopped === "]" || inputPopped === "}" || inputPopped === ")") {
      stack.push(inputPopped);
    } else {
      stackPopped = stack.pop();

      // Check if the popped stack element matches the current input character's corresponding bracket
      if (mapping[stackPopped] !== inputPopped) {
        console.log("invalid string");

        break;
      } else {
        flag = 1;
      }
    }
  }
  if (flag == 1) {
    console.log("ValidString");
  }
}

strToArray(inputSplit);
validStr(inputModified);
