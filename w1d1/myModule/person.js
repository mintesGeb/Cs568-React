class Person {
  constructor(age) {
    this.age = age;
  }
  sayYourAge = () => "my age is " + this.age;
}
// console.log(new Person(17).sayYourAge());

export default Person;
