import React from "react";
export default class ToggleStartButton extends React.Component {
  render() {
    let buttonText = "";
    if (this.props.isLive) {
      buttonText = "Stop";
    } else {
      buttonText = "Start";
    }
    return <button onClick={this.props.toggleStart}>{buttonText}</button>;
  }
}
