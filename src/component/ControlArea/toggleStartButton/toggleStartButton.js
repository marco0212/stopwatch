import React from "react";
export default class ToggleStartButton extends React.Component {
  render() {
    let buttonText = "";
    if (this.props.isLive) {
      buttonText = "중단";
    } else {
      buttonText = "시작";
    }
    return <button onClick={this.props.toggleStart}>{buttonText}</button>;
  }
}
