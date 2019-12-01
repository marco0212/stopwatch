import React from "react";
export default class UtilButton extends React.Component {
  render() {
    let buttonText = "";
    if (this.props.isLive) {
      buttonText = "랩";
    } else {
      buttonText = "재설정";
    }
    return <button onClick={this.props.utilFunction}>{buttonText}</button>;
  }
}
