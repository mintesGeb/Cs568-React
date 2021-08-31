let add = (x, y) => x + y;
let add2 = (a, b) => {
  return a + b;
};
console.log(add(3, 6)); //9
console.log(add2(3, 6)); //9
console.log(add === add2); //false

function Person(name, age) {
  this.name = name;
  this.age = age;
}
let per1 = new Person("mintes", 30);
console.log(per1);

// arrow functions can't be used as constructor functions

// let Animal = (name, family) => {
//   this.name = name;
//   this.family = family;
// };
// let ani1 = new Animal("Lion", "cat");
// console.log(ani1);
