import React from 'react'

const Controls = ({ isActive, onStartPause, onReset }) => {
  return (
    <div className='controls'>
        <button onClick={onStartPause}>
            {isActive ? "Pause" : "Start"}
        </button>
        <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Controls;