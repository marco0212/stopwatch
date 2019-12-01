import React from "react";
import ToggleStartButton from "./toggleStartButton/toggleStartButton";

export default class ControlArea extends React.Component {
  render() {
    return (
      <div className="control-area">
        <ToggleStartButton toggleStart={this.props.toggleStart} />
      </div>
    );
  }
}
