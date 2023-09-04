/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

const findPath = (object, path) => {
  let arrayPath = path.split(".");
  console.log(arrayPath);
  let pathLenght = arrayPath.length;
  function parse() {
    for (let i = 0; i < pathLenght; i++) {
      let elem = arrayPath[i];
      console.log(elem);
      if (typeof object[elem] == "undefined") {
        return undefined;
      }
      elsif(typepf(object[elem] == "object"));
      console.log(result);
    }
  }
};

console.log(findPath(obj, "a.b.c")); // 12
// console.log(findPath(obj, "a.b")); // {c: 12, j: false}
// console.log(findPath(obj, "a.b.d")); // undefined
// console.log(findPath(obj, "a.c")); // undefined
// console.log(findPath(obj, "a.b.c.d")); // undefined
// console.log(findPath(obj, "a.b.c.d.e")); // undefined
// console.log(findPath(obj, "a.b.j")); //false
// console.log(findPath(obj, "a.b.j.k")); //undefined
// console.log(findPath(obj, "a.k")); //null

//Note:- to access the object elements dynamically use [] brackets not '.' operator
