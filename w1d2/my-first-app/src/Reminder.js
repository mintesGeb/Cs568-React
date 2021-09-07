import React from "react";
class Reminder extends React.Component {
  render() {
    return (
      <div>
        <p>
          <b>
            <i>{this.props.title}</i>
          </b>
        </p>

        <p>{this.props.description}</p>

        <p>{this.props.date}</p>
        <input
          //   className="updateFields"
          type="text"
          value={this.props.title}
          onChange={this.props.changeTitle}
        />

        <input
          //   className="updateFields"
          type="text"
          value={this.props.description}
          onChange={this.props.changeDescription}
        />

        <input
          //   className="updateFields"
          type="date"
          value={this.props.date}
          onChange={this.props.changeDate}
        />

        <input
          //   className="updateFields"
          type="button"
          value="Update"
          onClick={this.props.updateClicked}
        />
        <input
          type="button"
          value="Delete"
          onClick={this.props.deleteReminder}
        />
      </div>
    );
  }
}
export default Reminder;
