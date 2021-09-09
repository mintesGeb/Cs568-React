// import logo from "./logo.svg";
import "./App.css";
import Students from "./student";
import Courses from "./courses";
import React from "react";

class App extends React.Component {
  state = {
    students: [
      {
        id: "1",
        fname: "mintes",
        lname: "gebre",
        gpa: 3.5,
        age: 30,
        location: "Greenbelt",
        detail: false,
        updating: false,
      },
      {
        id: "2",
        fname: "jossy",
        lname: "tekle",
        gpa: 3.7,
        age: 26,
        location: "Fairfield",
        detail: false,
      },
      {
        id: "3",
        fname: "robbie",
        lname: "benti",
        gpa: 3.9,
        age: 26,
        location: "Wahington D.C",
        detail: false,
      },
    ],
    topStudents: [
      {
        id: "3",
        fname: "robbie",
        lname: "benti",
        gpa: 3.9,
        age: 26,
        location: "Wahington D.C",
        detail: false,
      },
    ],
    courses: [
      {
        id: "cs301",
        name: "fjs",
        rating: 2,
        difficulty: "beginners",
        detail: false,
      },
      {
        id: "cs303",
        name: "oop",
        rating: 4,
        difficulty: "midlevel",
        detail: false,
      },
      {
        id: "cs568",
        name: "react",
        rating: 5,
        difficulty: "advanced",
        detail: false,
      },
    ],
    popularCourses: [
      { id: "cs303", name: "oop" },
      {
        id: "cs568",
        name: "react",
        rating: 5,
        difficulty: "advanced",
        detail: false,
      },
    ],
    isStudentsVisible: false,
    isCoursesVisible: false,
  };

  detailStudent = (id) => {
    let result = this.state.students.map((stu) => {
      if (stu.id === id) {
        let copy = { ...stu };
        copy.detail = !copy.detail;
        return copy;
      }
      return stu;
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
    this.setState({ isStudentsVisible: !this.state.isStudentsVisible });
  };
  toggleCourses = () => {
    this.setState({ isCoursesVisible: !this.state.isCoursesVisible });
  };
  deleteStudent = (id) => {
    let result = this.state.students.filter((stu) => stu.id !== id);
    this.setState({ students: result });
  };
  updateStudent = (id) => {
    let result = this.state.students.map((stu) => {
      if (stu.id === id) {
        let copy = { ...stu };
        copy.updating = !copy.updating;
        return copy;
      }
      return stu;
    });
    this.setState({ students: result });
  };
  courseDelete = (id) => {
    let result = this.state.courses.filter((course) => course.id !== id);
    this.setState({ courses: result });
  };
  courseDetail = (id) => {
    let result = this.state.courses.map((course) => {
      if (course.id === id) {
        let copy = { ...course };
        copy.detail = !copy.detail;
        return copy;
      }
      return course;
    });
    this.setState({ courses: result });
  };

  render() {
    let courses = null;
    if (this.state.isCoursesVisible) {
      courses = this.state.courses.map((course) => {
        let basic = (
          <div>
            <Courses
              id={course.id}
              name={course.name}
              courseDelete={() => this.courseDelete(course.id)}
              courseDetail={() => this.courseDetail(course.id)}
            />
          </div>
        );
        let detail = (
          <div>
            <Courses
              id={course.id}
              name={course.name}
              rating={course.rating}
              difficulty={course.difficulty}
              courseDelete={() => this.courseDelete(course.id)}
              courseDetail={() => this.courseDetail(course.id)}
            />
          </div>
        );
        if (course.detail) {
          return detail;
        }
        return basic;
      });
    }
    let students = null;
    if (this.state.isStudentsVisible) {
      students = this.state.students.map((stu) => {
        let basic = (
          <div>
            <hr />
            <Students
              key={stu.id}
              fname={stu.fname}
              lname={stu.lname}
              fnameChange={(event) => {
                this.fnameChange(stu.id, event);
              }}
              lnameChange={(event) => {
                this.lnameChange(stu.id, event);
              }}
              deleteStudent={() => {
                this.deleteStudent(stu.id);
              }}
              detailStudent={() => {
                this.detailStudent(stu.id);
              }}
            ></Students>
            {/* <input
              type="button"
              value="update"
              onClick={() => this.updateStudent(stu.id)}
            /> */}
          </div>
        );
        let detail = (
          <div>
            <hr />
            <input
              type="text"
              value={stu.fname}
              onChange={(event) => {
                this.fnameChange(stu.id, event);
              }}
            />
            <input
              type="text"
              value={stu.lname}
              onChange={(event) => {
                this.lnameChange(stu.id, event);
              }}
            />
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
              detailStudent={() => {
                this.detailStudent(stu.id);
              }}
            ></Students>
            {/* <input
              type="button"
              value="update"
              onClick={() => this.updateStudent(stu.id)}
            /> */}
          </div>
        );
        if (stu.detail) {
          return detail;
        }
        return basic;
      });
    }
    return (
      <div>
        <input
          type="button"
          value="Show Students"
          onClick={this.toggleStudents}
        />
        <input
          type="button"
          value="Show Top Students"
          onClick={this.toggleStudents}
        />
        <input
          type="button"
          value="Show Courses"
          onClick={this.toggleCourses}
        />
        {students}
        {courses}
      </div>
    );
  }
}

export default App;
