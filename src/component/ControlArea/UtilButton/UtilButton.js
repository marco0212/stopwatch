import React from "react";
export default class UtilButton extends React.Component {
  render() {
    let buttonText = "",
      className = "";
    if (this.props.time) {
      if (this.props.isLive) {
        buttonText = "랩";
      } else {
        buttonText = "재설정";
      }
    } else {
      buttonText = "랩";
      className = "disable";
    }

    return (
      <button className={className} onClick={this.props.utilFunction}>
        {buttonText}
      </button>
    );
  }
}
