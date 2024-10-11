import React from 'react'

const TimerDisplay = ({ timeLeft }) => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
  return (
    <div className='timer-display'>
        <h1>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
    </div>
  );
};

export default TimerDisplay;