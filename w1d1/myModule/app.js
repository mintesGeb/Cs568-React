// import student from "./student"
// import stu from "./student"
import { sayHi } from "./helper.js";
import { minutesInHour } from "./helper.js";

import Student from "./student.js";
let hobbies = ["bike", "read", "sing"];
const stu1 = new Student("bob", hobbies);
console.log(stu1.sayHi());
console.log(stu1.sayYourAge());
console.log(stu1.showHobbies(...stu1.hobbies));
console.log(stu1.showFavHobby());
let stu2 = { ...stu1 };
stu2.name = "sara";
stu2.hobbies = ["eating", "running", "movies"];
console.log(stu2.name);
console.log(stu2.sayHi());
// console.log(stu2.sayYourAge());
// console.log(stu2.showHobbies(...stu1.hobbies));
// console.log(stu2.showFavHobby());
