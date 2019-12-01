import React from "react";
import ToggleStartButton from "./toggleStartButton/toggleStartButton";
import UtilButton from "./UtilButton/UtilButton";

export default class ControlArea extends React.Component {
  render() {
    return (
      <div className="control-area">
        <UtilButton />
        <ToggleStartButton toggleStart={this.props.toggleStart} />
      </div>
    );
  }
}
