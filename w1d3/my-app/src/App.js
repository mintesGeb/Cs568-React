// import logo from "./logo.svg";
import "./App.css";
// import Person from "./Person";
import React from "react";
import Student from "./Student";
import Counter1 from "./Counter1";
import FirstName from "./firstName";
import LastName from "./lastName";
import Age from "./age";
import Photo from "./photo";
import { checkPropTypes } from "prop-types";

class App extends React.Component {
  state = {
    students: [
      { id: "1", fname: "mintesinot", lname: "gebre", age: 30 },
      { id: "2", fname: "jos", lname: "tek", age: 26 },
    ],
    isVisible: false,
    dummy: "dummy value",
    photoUrl: "https://picsum.photos/200",
    desc: "this is random student photo",
  };
  handleIncrement = (id) => {
    let result = this.state.students.map((item) => {
      if (item.id == id) {
        let copy = { ...item };
        copy.age = copy.age + 1;
        return copy;
      }
      return item;
    });
    this.setState({ students: result });
    // this.setState({
    //   students: [
    //     {
    //       fname: this.state.students[0].fname,
    //       lname: this.state.students[0].lname,
    //       age: this.state.students[0].age + 1,
    //     },
    //   ],
    // });
  };
  handleDecrement = (id) => {
    let result = this.state.students.map((item) => {
      if (item.id == id) {
        let copy = { ...item };
        copy.age = copy.age - 1;
        return copy;
      }
      return item;
    });
    this.setState({ students: result });
    // this.setState({
    //   students: [
    //     {
    //       fname: this.state.students[0].fname,
    //       lname: this.state.students[0].lname,
    //       age: this.state.students[0].age - 1,
    //     },
    //   ],
    // });
    // console.log(this.state);
  };

  changeName = (id, event) => {
    let result = this.state.students.map((item) => {
      if (id == item.id) {
        let copy = { ...item };
        copy.fname = event.target.value;
        return copy;
      }
      return item;
    });
    this.setState({ students: result });
  };
  toggleClicked = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    let student = null;
    if (this.state.isVisible) {
      student = this.state.students.map((stu) => {
        return (
          <div key={stu.id}>
            <FirstName
              fname={stu.fname}
              changeName={(event) => {
                this.changeName(stu.id, event);
              }}
            >
              My first name is{" "}
            </FirstName>
            <LastName lname={stu.lname}>My Last name is </LastName>
            <Age
              age={stu.age}
              handleDecrement={() => this.handleDecrement(stu.id)}
              handleIncrement={() => this.handleIncrement(stu.id)}
            >
              I am{" "}
            </Age>
          </div>
        );
      });
    }
    return (
      <div>
        <input
          type="button"
          value="Toggle Students"
          onClick={this.toggleClicked}
        />

        {student}
        {/* <FirstName
          fname={this.state.students[0].fname}
          changeName={(event) => {
            this.changeName(this.state.students[0].id, event);
          }}
        >
          My first name is{" "}
        </FirstName>
        <LastName lname={this.state.students[0].lname}>
          My Last name is{" "}
        </LastName>
        <Age
          age={this.state.students[0].age}
          handleDecrement={() =>
            this.handleDecrement(this.state.students[0].id)
          }
          handleIncrement={() =>
            this.handleIncrement(this.state.students[0].id)
          }
        >
          I am{" "}
        </Age>
        <FirstName
          fname={this.state.students[1].fname}
          changeName={(event) => {
            this.changeName(this.state.students[1].id, event);
          }}
        >
          My first name is{" "}
        </FirstName>
        <LastName lname={this.state.students[1].lname}>
          My Last name is{" "}
        </LastName>
        <Age
          age={this.state.students[1].age}
          handleDecrement={() =>
            this.handleDecrement(this.state.students[1].id)
          }
          handleIncrement={() =>
            this.handleIncrement(this.state.students[1].id)
          }
        >
          I am{" "}
        </Age> */}
        {/* <Student
          fname={this.state.students[0].fname}
          age={this.state.students[0].age}
        />
        <p>{this.state.dummy}</p>
        <Photo src={this.state.photoUrl} alt={this.state.desc}>
          Please replace with real picture
        </Photo> */}
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
