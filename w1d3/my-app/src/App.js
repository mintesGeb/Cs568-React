// import logo from "./logo.svg";
import "./App.css";
// import Person from "./Person";
import React from "react";
import Student from "./Student";
import Counter1 from "./Counter1";
import FirstName from "./firstName";
import LastName from "./lastName";
import Age from "./age";

class App extends React.Component {
  state = {
    students: [{ fname: "mintesinot", lname: "gebre", age: 30 }],
  };
  handleIncrement = () => {
    this.setState({
      students: [
        {
          fname: this.state.students[0].fname,
          lname: this.state.students[0].lname,
          age: this.state.students[0].age + 1,
        },
      ],
    });
  };
  handleDecrement = () => {
    this.setState({
      students: [
        {
          fname: this.state.students[0].fname,
          lname: this.state.students[0].lname,
          age: this.state.students[0].age - 1,
        },
      ],
    });
  };
  render() {
    return (
      <div>
        <FirstName fname={this.state.students[0].fname}>
          My first name is{" "}
        </FirstName>
        <LastName lname={this.state.students[0].lname}>
          My Last name is{" "}
        </LastName>
        <Age
          age={this.state.students[0].age}
          handleDecrement={this.handleDecrement}
          handleIncrement={this.handleIncrement}
        >
          I am{" "}
        </Age>
      </div>
    );
  }
}
// class App extends React.Component {
//   state = {
//     students: [{ fname: "mintes", lname: "Gebre", age: 30 }],
//     counter: 1,
//   };

//   increamentHandler = () => {
//     this.setState((currentValue) => {
//       return { counter: currentValue.counter + 1 };
//     });
//   };
//   decrementHandler = () => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <Counter1
//           value={this.state.counter}
//           incrementHandler={this.increamentHandler}
//           decrementHandler={this.decrementHandler}
//         ></Counter1>
//         <Student fname={this.state.students[0].fname} />
//         <Student age={this.state.students[0].age} />
//         <FirstName fname={this.state.students[0].fname} />
//         <LastName lname={this.state.students[0].lname} />
//       </div>
//     );
//   }
// }

// import Counter from "./Counter";
// class App extends React.Component {
//   state = {
//     value: 0,
//   };
//   handleIncreament = () => {
//     console.log("Clicked");
//     // this.setState({
//     //   value: this.state.value + 1,
//     // });
//     this.setState((currentState) => {
//       return { value: currentState.value + 1 };
//     });
//   };
//   render() {
//     return (
//       <div>
//         <Counter
//           currentValue={this.state.value}
//           onClickHandler={this.handleIncreament}
//         ></Counter>
//         <Counter
//           currentValue={this.state.value}
//           onClickHandler={this.handleIncreament}
//         ></Counter>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   state = {
//     counter: 0,
//   };
//   handleIncreament = () => {
//     console.log("Clicked");
//     this.setState({
//       counter: this.state.counter + 1,
//     });
//     console.log(this.state.counter);
//   };
//   render() {
//     return (
//       <div>
//         <p>{this.state.counter}</p>

//         <input
//           type="button"
//           value="Increament"
//           onClick={this.handleIncreament}
//         />
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div>
//       <Person fName="mintes" lName="gebre">
//         This is myself
//       </Person>
//       <Person fName="jos" lName="tekle" />
//     </div>
//   );
// }

export default App;
