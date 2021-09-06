import React from "react";

class NewReminder extends React.Component {
  render() {
    return (
      <div>
        <p>Title: </p>
        <input
          type="text"
          value={this.props.title}
          onChange={this.props.titleChanged}
        />
        <p>Description: </p>
        <input
          type="text"
          value={this.props.description}
          onChange={this.props.descriptionChanged}
        />
        <p>Date: </p>
        <input
          type="date"
          value={this.props.date}
          onChange={this.props.dateChanged}
        />
        <input
          type="button"
          value="Submit"
          onClick={this.props.submitClicked}
        />
      </div>
    );
  }
}

export default NewReminder;
