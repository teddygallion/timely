import React, { useState } from "react";
import "../styles/Settings.css";

const Settings = ({ setWorkTime, setBreakTime }) => {
  const [workInput, setWorkInput] = useState(25);
  const [breakInput, setBreakInput] = useState(5);

  const handleApplySettings = () => {
    setWorkTime(workInput * 60); 
    setBreakTime(breakInput * 60);
  };

  return (
    <div className="settings">
      <h2>Timer Settings</h2>
      <div className="input-group">
        <label>Work Duration (minutes):</label>
        <input 
          type="number" 
          value={workInput} 
          onChange={(e) => setWorkInput(Number(e.target.value))} 
          min="1" 
        />
      </div>
      <div className="input-group">
        <label>Break Duration (minutes):</label>
        <input 
          type="number" 
          value={breakInput} 
          onChange={(e) => setBreakInput(Number(e.target.value))} 
          min="1" 
        />
      </div>
      <button onClick={handleApplySettings}>Apply</button>
    </div>
  );
};

export default Settings;
