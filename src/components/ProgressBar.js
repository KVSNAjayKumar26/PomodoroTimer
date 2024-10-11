import React from 'react';

const ProgressBar = ({ timeLeft, totalTime }) => {
    const progress = ((totalTime - timeLeft) / totalTime) * 100;
  return (
    <div className='progress-bar'>
        <div className='fill' style={{ width: `${progress}%`}}></div>
    </div>
  )
}

export default ProgressBar