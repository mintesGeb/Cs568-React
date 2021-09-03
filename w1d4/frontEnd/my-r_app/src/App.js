// import logo from "./logo.svg";
import "./App.css";
import Students from "./student";
import React from "react";

class App extends React.Component {
  state = {
    students: [
      {
        id: "1",
        fname: "mintes",
        lname: "gebre",
        age: 30,
        location: "Greenbelt",
      },
      {
        id: "2",
        fname: "jossy",
        lname: "tekle",
        age: 26,
        location: "Fairfield",
      },
    ],
    isVisible: true,
  };
  incrementHandler = (id) => {
    let result = this.state.students.map((student) => {
      if (student.id === id) {
        let copy = { ...student };
        copy.age = copy.age + 1;
        return copy;
      }
      return student;
    });
    this.setState({ students: result });
  };
  decrementHandler = (id) => {
    let result = this.state.students.map((student) => {
      if (student.id === id) {
        let copy = { ...student };
        copy.age = copy.age - 1;
        return copy;
      }
      return student;
    });
    this.setState({ students: result });
  };
  fnameChange = (id, event) => {
    let result = this.state.students.map((student) => {
      if (student.id === id) {
        let copy = { ...student };
        copy.fname = event.target.value;
        return copy;
      }
      return student;
    });
    this.setState({ students: result });
  };
  lnameChange = (id, event) => {
    let result = this.state.students.map((student) => {
      if (student.id === id) {
        let copy = { ...student };
        copy.lname = event.target.value;
        return copy;
      }
      return student;
    });
    this.setState({ students: result });
  };
  toggleStudents = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  deleteStudent = (id) => {
    let result = this.state.students.filter((stu) => stu.id !== id);
    this.setState({ students: result });
  };

  render() {
    let student = null;
    if (this.state.isVisible) {
      student = this.state.students.map((stu) => {
        return (
          <Students
            key={stu.id}
            fname={stu.fname}
            lname={stu.lname}
            age={stu.age}
            location={stu.location}
            incrementHandler={() => {
              this.incrementHandler(stu.id);
            }}
            decrementHandler={() => {
              this.decrementHandler(stu.id);
            }}
            fnameChange={(event) => {
              this.fnameChange(stu.id, event);
            }}
            lnameChange={(event) => {
              this.lnameChange(stu.id, event);
            }}
            deleteStudent={() => {
              this.deleteStudent(stu.id);
            }}
          >
            Lucky To be a student
          </Students>
        );
      });
    }
    return (
      <div>
        <input
          type="button"
          value="Show Students"
          onClick={this.toggleStudents}
        />
        {student}
        {/* <Students
          fname={this.state.students[0].fname}
          lname={this.state.students[0].lname}
          age={this.state.students[0].age}
          incrementHandler={() => {
            this.incrementHandler(this.state.students[0].id);
          }}
          decrementHandler={() => {
            this.decrementHandler(this.state.students[0].id);
          }}
          fnameChange={(event) => {
            this.fnameChange(this.state.students[0].id, event);
          }}
          lnameChange={(event) => {
            this.lnameChange(this.state.students[0].id, event);
          }}
        >
          Lucky To be a student
        </Students>

        <Students
          fname={this.state.students[1].fname}
          lname={this.state.students[1].lname}
          age={this.state.students[1].age}
          incrementHandler={() => {
            this.incrementHandler(this.state.students[1].id);
          }}
          decrementHandler={() => {
            this.decrementHandler(this.state.students[1].id);
          }}
          fnameChange={(event) => {
            this.fnameChange(this.state.students[1].id, event);
          }}
          lnameChange={(event) => {
            this.lnameChange(this.state.students[1].id, event);
          }}
        >
          Lucky To be a student
        </Students> */}
      </div>
    );
  }
}

export default App;
