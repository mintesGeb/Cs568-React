// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Reminder from "./Reminder";
import NewReminder from "./createNewReminder";

class App extends React.Component {
  state = {
    reminders: [
      {
        id: 1,
        title: "study for react exam",
        description: "Go over the slides",
        date: "2021-03-29",
      },
      {
        id: 2,
        title: "apply for jobs",
        description: "apply to all the big tech companies",
        date: "2021-11-19",
      },
    ],
    isAddingNewMember: false,
    newMember: {
      id: 3,
      title: "",
      description: "",
      date: "",
    },
    showAllReminders: false,
  };

  addNewReminderFormToggle = () => {
    this.setState({ isAddingNewMember: !this.state.isAddingNewMember });
  };

  addNewMemberSubmitted = () => {
    this.setState({
      newMember: {
        id: this.state.newMember.id + 1,
        title: this.state.newMember.title,
        description: this.state.newMember.description,
        date: this.state.newMember.date,
      },
    });
    this.state.reminders.push(this.state.newMember);
  };
  titleChanged = (event) => {
    this.setState({
      newMember: {
        id: this.state.newMember.id,
        title: event.target.value,
        description: this.state.newMember.description,
        date: this.state.newMember.date,
      },
    });
  };
  descriptionChanged = (event) => {
    this.setState({
      newMember: {
        id: this.state.newMember.id,
        title: this.state.newMember.title,
        description: event.target.value,
        date: this.state.newMember.date,
      },
    });
  };
  dateChanged = (event) => {
    this.setState({
      newMember: {
        id: this.state.newMember.id,
        title: this.state.newMember.title,
        description: this.state.newMember.description,
        date: event.target.value,
      },
    });
  };
  deleteReminder = (id) => {
    let result = this.state.reminders.filter((rem) => rem.id !== id);
    this.setState({ reminders: result });
  };
  changeTitle = (id, event) => {
    let result = this.state.reminders.map((rem) => {
      if (rem.id === id) {
        let copy = { ...rem };
        copy.title = event.target.value;
        return copy;
      }
      return rem;
    });
    this.setState({ reminders: result });
  };
  changeDescription = (id, event) => {
    let result = this.state.reminders.map((rem) => {
      if (rem.id === id) {
        let copy = { ...rem };
        copy.description = event.target.value;
        return copy;
      }
      return rem;
    });
    this.setState({ reminders: result });
  };
  changeDate = (id, event) => {
    console.log(event.target.value);
    let result = this.state.reminders.map((rem) => {
      if (rem.id === id) {
        let copy = { ...rem };
        copy.date = event.target.value;
        return copy;
      }
      return rem;
    });
    // console.log(this.state.reminders((rem) => rem.id === id));
    this.setState({ reminders: result });
  };
  updateClicked = () => {};

  showAllReminders = () => {
    this.setState({ showAllReminders: !this.state.showAllReminders });
  };

  render() {
    let allReminders = null;
    if (this.state.showAllReminders) {
      allReminders = this.state.reminders.map((reminder) => {
        return (
          <Reminder
            key={reminder.id}
            id={reminder.id}
            title={reminder.title}
            description={reminder.description}
            date={reminder.date}
            deleteReminder={() => {
              this.deleteReminder(reminder.id);
            }}
            changeTitle={(event) => this.changeTitle(reminder.id, event)}
            changeDescription={(event) =>
              this.changeDescription(reminder.id, event)
            }
            changeDate={(event) => this.changeDate(reminder.id, event)}
            updateClicked={this.updateClicked}
          ></Reminder>
        );
      });
    }
    let readyToAddNewMember = null;
    if (this.state.isAddingNewMember) {
      readyToAddNewMember = (
        <NewReminder
          submitClicked={this.addNewMemberSubmitted}
          titleChanged={(event) => this.titleChanged(event)}
          descriptionChanged={(event) => this.descriptionChanged(event)}
          dateChanged={(event) => this.dateChanged(event)}
        />
      );
    }
    return (
      <div>
        <input
          type="button"
          value="Show All Reminders"
          onClick={this.showAllReminders}
        />
        {allReminders}
        <hr />

        <input
          type="button"
          value="Add New Reminder"
          onClick={this.addNewReminderFormToggle}
        />
        {readyToAddNewMember}
      </div>
    );
  }
}

export default App;
