import React from "react";
import ToggleStartButton from "./ToggleStartButton/ToggleStartButton";
import UtilButton from "./UtilButton/UtilButton";

export default function ControlArea(props) {
  return (
    <div className="control-area">
      <UtilButton
        utilFunction={props.utilFunction}
        time={props.time}
        isLive={props.appStatus}
      />
      <ToggleStartButton
        toggleStart={props.toggleStart}
        isLive={props.appStatus}
      />
    </div>
  );
}
