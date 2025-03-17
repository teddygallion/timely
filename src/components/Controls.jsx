import React from "react";
import "../styles/Controls.css";

const Controls = ({ startStop, reset, isRunning }) => {
  return (
    <div className="controls">
      <button onClick={startStop}>{isRunning ? "Pause" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Controls;
