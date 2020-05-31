import React from "react";

function Monitor(props) {
  return (
    <div className="monitor">
      <time>{props.getTimeEle(props.time)}</time>
    </div>
  );
}

export default Monitor;
