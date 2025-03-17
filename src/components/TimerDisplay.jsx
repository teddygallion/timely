import React from "react";
import "../styles/TimerDisplay.css";

const TimerDisplay = ({ timeLeft, isBreak }) => {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="timer">
      <h1>{isBreak ? "Break Time" : "Work Session"}</h1>
      <h2>{formatTime(timeLeft)}</h2>
    </div>
  );
};

export default TimerDisplay;
