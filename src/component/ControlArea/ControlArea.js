import React from "react";
import ToggleStartButton from "./toggleStartButton/toggleStartButton";
import UtilButton from "./UtilButton/UtilButton";

export default class ControlArea extends React.Component {
  render() {
    return (
      <div className="control-area">
        <UtilButton isLive={this.props.appStatus} />
        <ToggleStartButton
          toggleStart={this.props.toggleStart}
          isLive={this.props.appStatus}
        />
      </div>
    );
  }
}
