// const student = {
//   name: "bob",
// };
// export default student;
import Person from "./person.js";

class Student extends Person {
  constructor(name, hobbies) {
    super(17);
    this.name = name;
    this.hobbies = hobbies;
  }

  sayHi = () => `Hi. I am ${this.name} and ${this.age} years old`;
  showHobbies = (x, y, z) => "My Hobbies are " + x + y + "and" + z;
  showFavHobby = () => {
    let [x] = this.hobbies;
    return x;
  };
}

// console.log(new Student("bob").sayHi());

export default Student;
