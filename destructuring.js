// // Example 1
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

// let { ...son } = person;
// lastName = "Sonia";
// console.log(son);
// // console.log(firstName); // Output: John
// console.log(lastName); // Output: Doe
// // console.log(age); // Output: 30
// console.log(person);

// function sum(...son) {
//   let sum = 0;
//   const [a] = son;
//   let [b] =
//     //   let ar = [...son];
//     // console.log("a", a);
//   for (let i = 0; i <= a.length - 1; i++) {
//     sum += a[i];
//   }
//   return sum;
// }

// console.log(sum([1, 2, 3, 4, 5, 6]));
// let arr1 = [10, 2, 30, 40];
// let arr2 = [50, 60, 60];
// arr1 = [...arr1, ...arr2];
// console.log("arr1", arr1);
// // Example 2
// const book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   year: 1925,
// };

// const { title, author } = book;

// console.log(title); // Output: The Great Gatsby
// console.log(author); // Output: F. Scott Fitzgerald

// ********************************
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
  hobbies: ["reading", "hiking"],
};

let {
  address: { city },
} = person;
console.log(city);

// // Destructuring nested object and array
// const {
//   name,
//   age,
//   address: { street, city, country },
//   hobbies: [hobby1, hobby2],
// } = person;

// console.log(name); // Output: John
// console.log(age); // Output: 30
// console.log(street); // Output: 123 Main St
// console.log(city); // Output: Anytown
// console.log(country); // Output: USA
// console.log(hobby1); // Output: reading
// console.log(hobby2); // Output: hiking
