import React from "react";
import { useTimer } from "./hooks/useTimer";
import TimerDisplay from "./components/TimerDisplay";
import Controls from "./components/Controls";
import Settings from "./components/Settings";
import TodoList from "./components/TodoList"; 
import "./styles/App.css";
import Tomato from "./assets/tomato.svg";

const App = () => {
  const { timeLeft, isRunning, isBreak, startStop, reset, setWorkTime, setBreakTime } = useTimer(25, 5);

  return (
    <div className="app">
    <h1> Time.ly </h1>
      <TodoList />  
      
    
      <div className="timer-container">
        <TimerDisplay timeLeft={timeLeft} isBreak={isBreak} />
        <Controls startStop={startStop} reset={reset} isRunning={isRunning} />
        <Settings setWorkTime={setWorkTime} setBreakTime={setBreakTime} />
      </div>
    </div>
  );
};

export default App;