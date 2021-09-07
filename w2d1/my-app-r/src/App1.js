import "./App.css";

import React from "react";
import Reminder from "./Reminder";
import NewReminder from "./newReminder";

class App extends React.Component {
  state = {
    reminders: [
      {
        id: 1,
        title: "study",
        description: "go through the lectures",
        date: "2021-09-05",
        time: "1pm",
        with: "friends",
        showDetails: false,
      },
      {
        id: 2,
        title: "apply for job",
        description: "look for react and angular jobs",
        date: "2021-10-05",
        time: "all day",
        with: "by yourself",
        showDetails: false,
      },
    ],
    noOfReminders: 2,
    newReminder: {
      title: "",
      description: "",
      date: "",
    },
    reminderUpdate: {
      title: "",
      description: "",
      date: "",
    },
    isShowingAllReminders: false,
    isAddingNewReminder: false,
  };
  showReminders = () => {
    this.setState({ isShowingAllReminders: !this.state.isShowingAllReminders });
  };
  deleteRem = (id) => {
    this.setState({
      reminders: this.state.reminders.filter((rem) => rem.id !== id),
    });
  };
  detailRem = (id) => {
    let result = this.state.reminders.map((rem) => {
      if (rem.id === id) {
        let copy = { ...rem };
        copy.showDetails = !rem.showDetails;
        return copy;
      }
      return rem;
    });
    this.setState({ reminders: result });
  };

  newReminderForm = () => {
    this.setState({ isAddingNewReminder: !this.state.isAddingNewReminder });
  };
  submitNewReminder = () => {
    let newReminder = { ...this.state.newReminder };
    newReminder.id = this.state.noOfReminders + 1;
    this.state.reminders.push(newReminder);
    this.setState({ noOfReminders: newReminder.id });
  };
  newReminderTitle = (event) => {
    this.setState({
      newReminder: {
        title: event.target.value,
        description: this.state.newReminder.description,
        date: this.state.newReminder.date,
      },
    });
  };
  newReminderDescription = (event) => {
    this.setState({
      newReminder: {
        title: this.state.newReminder.title,
        description: event.target.value,
        date: this.state.newReminder.date,
      },
    });
  };
  newReminderDate = (event) => {
    this.setState({
      newReminder: {
        title: this.state.newReminder.title,
        description: this.state.newReminder.description,
        date: event.target.value,
      },
    });
  };

  updateTitle = (event) => {
    this.setState({
      reminderUpdate: {
        title: event.target.value,
        description: this.state.reminderUpdate.description,
        date: this.state.reminderUpdate.date,
      },
    });
  };
  updateDescription = (event) => {
    this.setState({
      reminderUpdate: {
        title: this.state.reminderUpdate.title,
        description: event.target.value,
        date: this.state.reminderUpdate.date,
      },
    });
  };
  updateDate = (event) => {
    this.setState({
      reminderUpdate: {
        title: this.state.reminderUpdate.title,
        description: this.state.reminderUpdate.description,
        date: event.target.value,
      },
    });
  };
  updateRem = (id) => {
    console.log(this.state.reminderUpdate);
    let result = this.state.reminders.filter((rem) => rem.id !== id);
    let updated = { ...this.state.reminderUpdate };
    updated.id = id;
    result.push(updated);
    this.setState({ reminders: result });
  };

  render() {
    let dataToAddNewReminder = null;
    if (this.state.isAddingNewReminder) {
      dataToAddNewReminder = (
        <div>
          <NewReminder
            newReminderTitle={(event) => this.newReminderTitle(event)}
            newReminderDescription={(event) =>
              this.newReminderDescription(event)
            }
            newReminderDate={(event) => this.newReminderDate(event)}
          />
          <input
            type="button"
            value="Submit"
            onClick={this.submitNewReminder}
          />
        </div>
      );
    }
    let remindersData = null;
    if (this.state.isShowingAllReminders) {
      remindersData = this.state.reminders.map((rem) => {
        let basic = (
          <Reminder
            key={rem.id}
            id={rem.id}
            title={rem.title}
            description={rem.description}
            date={rem.date}
            deleteRem={() => this.deleteRem(rem.id)}
            detailRem={() => this.detailRem(rem.id)}
            updateRem={() => this.updateRem(rem.id)}
            updateTitle={(event) => this.updateTitle(event)}
            updateDescription={(event) => this.updateDescription(event)}
            updateDate={(event) => this.updateDate(event)}
          />
        );
        let detail = (
          <Reminder
            key={rem.id}
            id={rem.id}
            title={rem.title}
            time={rem.time}
            with={rem.with}
            description={rem.description}
            date={rem.date}
            deleteRem={() => this.deleteRem(rem.id)}
            detailRem={() => this.detailRem(rem.id)}
            updateRem={() => this.updateRem(rem.id)}
          />
        );
        if (rem.showDetails) {
          return detail;
        }
        return basic;
      });
    }
    return (
      <div>
        <input
          type="button"
          value="Show All Reminders"
          onClick={this.showReminders}
        />
        {remindersData}
        <input
          type="button"
          value="New Reminder"
          onClick={this.newReminderForm}
        />
        {dataToAddNewReminder}
      </div>
    );
  }
}
export default App;
