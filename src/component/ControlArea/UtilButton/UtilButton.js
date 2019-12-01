import React from "react";
export default function UtilButton(props) {
  let buttonText = "",
    className = "";
  if (props.time) {
    if (props.isLive) {
      buttonText = "랩";
    } else {
      buttonText = "재설정";
    }
  } else {
    buttonText = "랩";
    className = "disable";
  }
  return (
    <button className={className} onClick={props.utilFunction}>
      {buttonText}
    </button>
  );
}
