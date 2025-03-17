import React from "react";
import { useTimer } from "./hooks/useTimer";
import TimerDisplay from "./components/TimerDisplay";
import Controls from "./components/Controls";
import Settings from "./components/Settings";
import TodoList from "./components/TodoList";  // Import TodoList component
import "./styles/App.css";
import Tomato from "./assets/tomato.svg";

const App = () => {
  const { timeLeft, isRunning, isBreak, startStop, reset, setWorkTime, setBreakTime } = useTimer(25, 5);

  return (
    <div className="app">
      {/* Left Side: Todo List */}
      <TodoList />  
      
      {/* Center: Timer, Controls, Settings */}
      <div className="timer-container">
        <TimerDisplay timeLeft={timeLeft} isBreak={isBreak} />
        <Controls startStop={startStop} reset={reset} isRunning={isRunning} />
        <Settings setWorkTime={setWorkTime} setBreakTime={setBreakTime} />
      </div>
    </div>
  );
};

export default App;