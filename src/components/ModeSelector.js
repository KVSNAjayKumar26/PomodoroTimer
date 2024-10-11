import React from 'react'

const ModeSelector = ({ mode, onChange }) => {
  return (
    <div className='mode-selector'>
        <button
        className={mode === "pomodro" ? "active" : ""}
        onClick={() => onChange("pomodro")}
        >            
        Pomodro
        </button>
        <button
        className={mode === "shortBreak" ? "active" : ""}
        onClick={() => onChange("shortBreak")}
        >
         shortBreak
        </button>
        <button
        className={mode === "longBreak" ? "active" : ""}
        onClick={() => onChange("longBreak")}
        >
            longBreak
        </button>
    </div>
  );
};

export default ModeSelector;