import React from "react";
export default class UtilButton extends React.Component {
  render() {
    let buttonText = "";
    if (this.props.isLive) {
      buttonText = "Push";
    } else {
      buttonText = "Reset";
    }
    return <button onClick={this.props.utilFunction}>{buttonText}</button>;
  }
}
