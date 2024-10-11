import React, { useEffect, useState } from 'react'
import ModeSelector from './ModeSelector';
import TimerDisplay from './TimerDisplay';
import ProgressBar from './ProgressBar';
import Controls from './Controls';
import './PomodroTimer.scss';
const PomodroTimer = () => {
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
    const [mode, setMode] = useState("pomodro"); // Default mode
    const [isActive, setIsActive] = useState(false);

    const modes = {
        pomodro: 25 * 60,
        shortBreak: 5 * 60,
        longBreak: 15 * 60,
    };

    // Handle countdown
    useEffect(() => {
        let timer;
        if (isActive && timeLeft > 0 ) {
            timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [isActive, timeLeft]);

    const handleModeChange = (newMode) => {
        setMode(newMode);
        setTimeLeft(modes[newMode]);
        setIsActive(false);
    };

    const handleStartPause = () => {
        setIsActive(!isActive);
    }

    const handleReset = () => {
        setTimeLeft(modes[mode]);
        setIsActive(false);
    }
  return (
    <div className={`pomodro-timer ${mode}`}>
        <ModeSelector mode={mode} onChange={handleModeChange} />
        <TimerDisplay timeLeft={timeLeft} />
        <ProgressBar timeLeft={timeLeft} totalTime={modes[mode]} />
        <Controls
        isActive={isActive}
        onStartPause={handleStartPause}
        onReset={handleReset}
        />
    </div>
  );
};

export default PomodroTimer;