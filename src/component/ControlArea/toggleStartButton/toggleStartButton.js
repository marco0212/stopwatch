import React from "react";
export default class ToggleStartButton extends React.Component {
  render() {
    let buttonText = "",
      color = "";
    if (this.props.isLive) {
      buttonText = "중단";
      color = "red";
    } else {
      buttonText = "시작";
      color = "green";
    }
    return (
      <button className={color} onClick={this.props.toggleStart}>
        {buttonText}
      </button>
    );
  }
}
