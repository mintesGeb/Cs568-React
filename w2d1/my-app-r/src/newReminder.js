import React from "react";

class NewReminder extends React.Component {
  render() {
    return (
      <div>
        <p>Title: </p>
        <input type="text" onChange={this.props.newReminderTitle} />
        <p>Description: </p>
        <input type="text" onChange={this.props.newReminderDescription} />
        <p>Date: </p>
        <input type="date" onChange={this.props.newReminderDate} />
      </div>
    );
  }
}

export default NewReminder;
