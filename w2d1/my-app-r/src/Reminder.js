import React from "react";

class Reminder extends React.Component {
  render() {
    return (
      <div>
        <h3>
          <i>
            <b>Reminder {this.props.id}</b>
          </i>
        </h3>
        <span>{this.props.title} </span>
        <input
          type="text"
          //   value={this.props.title}
          onChange={this.props.updateTitle}
        />
        <br />
        <span>{this.props.description} </span>
        <input
          type="text"
          //   value={this.props.description}
          onChange={this.props.updateDescription}
        />

        <br />
        <span>{this.props.date} </span>
        <input
          type="date"
          //   value={this.props.date}
          onChange={this.props.updateDate}
        />
        <p>{this.props.time}</p>
        <p>{this.props.with}</p>
        <input type="button" value="delete" onClick={this.props.deleteRem} />
        <input type="button" value="detail" onClick={this.props.detailRem} />
        <input type="button" value="update" onClick={this.props.updateRem} />
      </div>
    );
  }
}

export default Reminder;
