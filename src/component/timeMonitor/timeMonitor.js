import React from "react";

function TimeMonitor(props) {
  return (
    <div className="monitor">
      <time>{props.getTimeEle(props.time)}</time>
    </div>
  );
}

export default TimeMonitor;
