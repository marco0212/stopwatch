import React from "react";
export default function ToggleStartButton(props) {
  let buttonText = "",
    color = "";
  if (props.isLive) {
    buttonText = "중단";
    color = "red";
  } else {
    buttonText = "시작";
    color = "green";
  }
  return (
    <button className={color} onClick={props.toggleStart}>
      {buttonText}
    </button>
  );
}
