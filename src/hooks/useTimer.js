import { useState, useEffect } from "react";

export const useTimer = (initialWorkTime = 25, initialBreakTime = 5) => {
  const [workTime, setWorkTime] = useState(initialWorkTime * 60);
  const [breakTime, setBreakTime] = useState(initialBreakTime * 60);
  const [timeLeft, setTimeLeft] = useState(workTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsBreak(!isBreak);
      setTimeLeft(isBreak ? workTime : breakTime); 
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, isBreak, workTime, breakTime]);

  const startStop = () => setIsRunning((prev) => !prev);
  const reset = () => setTimeLeft(isBreak ? breakTime : workTime);

  return { timeLeft, isRunning, isBreak, startStop, reset, setWorkTime, setBreakTime };
};
