import React from "react";
export default class ToggleStartButton extends React.Component {
  render() {
    return <button onClick={this.props.toggleStart}>toggleStartButton</button>;
  }
}
