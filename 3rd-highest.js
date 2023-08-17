const array = [1, 3, 5, 2, 6, 6, 7, 7, 4];
const obj = {};

for (let i = 0; i < array.length; i++) {
  obj[array[i]] = obj.hasOwnProperty(array[i]) ? obj[i] + 1 : 1;
}

console.log(obj);
