// You are working with an API response that returns an array of book objects. Each book object contains properties such as title, author, publication, and details. The details property is an object that contains additional information about the book, such as pages, language, and genre. Write a destructuring code snippet to extract the title, author, and genre properties of the second book in the array.

// let book={
//     book1:{
//         title:[]
//         author:[]
//         publication:[]
//         details:{
//             pages:[]
//             languag:[]
//             genere:[]
//         }
//     }
// }

// let [ ,{title , authon , details:{genere}}] = book

// You are working with an API response that returns an array of user objects, each containing various properties. Each user object also contains an address property, which is an object containing the user's address details including street, city, and zipcode. Write a destructuring code snippet to extract the street, city, and zipcode properties of the first user in the array.

const data = {
  user: {
    name: "Alice",
    age: 30,
    contact: {
      email: "alice@example.com",
      phone: "123-456-7890",
    },
    address: {
      street: "123 Main St",
      city: "Wonderland",
      country: "Fantasy",
    },
  },
  order: {
    orderId: "123456",
    products: [
      { id: "1", name: "Product A" },
      { id: "2", name: "Product B" },
    ],
    amount: 150.0,
  },
};
let {
  user: {
    name,
    contact: { email },
  },
  order: {
    products: [{ name: pname }],
    amount,
  },
} = data;

console.log("pname", pname);

// const {
//   user: {
//     name,
//     contact: { email },
//   },
//   order: {
//     products: [{ name: pname }],
//     amount,
//   },
// } = data;
// console.log("pname", pname);

// The user's name
// The user's email
// The first product's name
// The amount of the order
