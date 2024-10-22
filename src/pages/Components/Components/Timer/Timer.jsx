import { useEffect, useState } from "react";
import "./Timer.css";

function Timer() {
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState( 10 * 0);
  // const [seconds, setSeconds] = useState( 10 * 3600);

  function runClick() {
    setRunning(!running);
  }

  useEffect( () => {
    let interval = null
    if (running) {
      interval = setInterval(() => {
        setSeconds(seconds + 1);
      },1000)
    }
    return () => clearInterval(interval)
  }, [running,seconds])

  function secondsToString(seconds){
    const MINUTE_SECONDS = 60
    const HOUR_SECONDS = 60 * MINUTE_SECONDS
    const DAY_SECONDS = 24 * HOUR_SECONDS

    const days = Math.floor(seconds / DAY_SECONDS)
    const hours = Math.floor((seconds % DAY_SECONDS) / HOUR_SECONDS)
    const minute = Math.floor((seconds % HOUR_SECONDS) / MINUTE_SECONDS)
    const secs = seconds % MINUTE_SECONDS 

    if (days > 0){
      return `${days}d ${hours}h ${minute}m ${secs}s`
    } else if (hours > 0) {
      return `${hours}h ${minute}m ${secs}s`    
    } else if (minute > 0) {
      return `${minute}m ${secs}s`
    } else {
      return `${secs}s`
    }
  }

  function resetClick (){
    setRunning(false)
    setSeconds(0)
  }

  return (
    <div className="timer-container">
      <h3 className="timer-title">Timer</h3>
      <p>
        <input
          className="timer-display"
          type="text"
          readOnly={true}
          value={secondsToString(seconds)}
        />
      </p>
      <div className="timer-button">
        <button className="btn btn-danger" onClick={resetClick} >Reset</button>
        <button className={"btn " + (running ? "btn btn-warning" : "btn btn-success")} onClick={runClick}>
          {running ? 'Pause' : 'Run'}
        </button>     
      </div>
    </div>
  );
}

export default Timer;













// import React, { useState, useEffect } from "react";
// import "./Timer.css";

// function Timer() {
//   const [time, setTime] = useState(0);               /* เก็บเวลาที่นับ*/
//   const [isRunning, setIsRunning] = useState(false); /* สถานะการทำงานของ Timer*/

//   // ใช้ useEffect เพื่อจัดการการทำงานของ setInterval
//   useEffect(() => {
//     let interval;
//     if (isRunning) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);   /* เพิ่มเวลาเมื่อกำลังทำงาน*/
//       }, 1000);
//     }
//     return () => clearInterval(interval);      /* เคลียร์ interval เมื่อหยุด*/
//   }, [isRunning]);

//   const handleStart = () => setIsRunning(true); /* ฟังก์ชันเริ่มนับเวลา*/
//   const handleStop = () => setIsRunning(false); /* ฟังก์ชันหยุดนับเวลา*/
//   const handleReset = () => {
//     setIsRunning(false);
//     setTime(0);       /* รีเซ็ตเวลาเป็น 0*/
//   };

//   useEffect(() => {
//     console.log(`Time update: ${time} s`);
//   }, [time]);

//   return (
//     <div className="timer-container">
//       <h3 className="Timer-name">Timer</h3>
//       <p className="time-display">{time} s</p>
//       <button className="timer-button timer-Start" onClick={handleStart}>
//         Start
//       </button>
//       <button className="timer-button timer-Stop" onClick={handleStop}>
//         Stop
//       </button>
//       <button className="timer-button timer-Reset" onClick={handleReset}>
//         Reset
//       </button>
//     </div>
//   );
// }

// export default Timer;
