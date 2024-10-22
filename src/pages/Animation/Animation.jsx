import React, { useEffect, useState } from 'react';
import "./Animation.css";

function Animation() {
  const fieldWidth = 1000;
  const fieldHeight = 600;
  const diameter = 130;
  const maxLeft = fieldWidth - diameter - 2;
  const maxTop = fieldHeight - diameter - 2;

  const [running, setRunning] = useState(false);
  const [position, setPosition] = useState({ x: (fieldWidth / 2) - (diameter / 2), y: (fieldHeight / 2) - (diameter / 2) });
  const [rotation, setRotation] = useState(0);
  const [speed, setSpeed] = useState({ vx: 5, vy: 5 });
  const [rotationSpeed, setRotationSpeed] = useState(3);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState("none");
  const [selectedButton, setSelectedButton] = useState('none');

  const randomSpeed = () => Math.floor(Math.random() * 4) + 2;
  const randomRotationSpeed = () => Math.floor(Math.random() * 5) + 1;

  const runClick = () => {
    setRunning(!running);
  };

  const calculate = () => {
    let newX = position.x;
    let newY = position.y;

    if (newX >= maxLeft) {
        newX = maxLeft;
        setGoRight(false);
        const newSpeed = randomSpeed();
        setSpeed({ vx: newSpeed, vy: newSpeed });
        setRotationSpeed(randomRotationSpeed());
      } else if (newX <= 0) {
        newX = 0;
        setGoRight(true);
        const newSpeed = randomSpeed(); 
        setSpeed({ vx: newSpeed, vy: newSpeed }); 
        setRotationSpeed(randomRotationSpeed()); 
      }

      if (newY >= maxTop) {
        newY = maxTop;
        setGoDown(false);
        const newSpeed = randomSpeed();
        setSpeed({ vx: newSpeed, vy: newSpeed });
        setRotationSpeed(randomRotationSpeed()); 
      } else if (newY <= 0) {
        newY = 0;
        setGoDown(true); 
        const newSpeed = randomSpeed(); 
        setSpeed({ vx: newSpeed, vy: newSpeed }); 
        setRotationSpeed(randomRotationSpeed()); 
      }
  
      newX = goRight ? newX + speed.vx : newX - speed.vx;
      newY = goDown ? newY + speed.vy : newY - speed.vy;
  
      setPosition({ x: newX, y: newY });
      setRotation((prevRotation) => (prevRotation + rotationSpeed) % 360);
    };

  useEffect(() => {
    const interval = setInterval(() => {
      if (running) {
        calculate();
      }
    }, 25);

    return () => clearInterval(interval);
  }, [running, position, goRight, goDown]);

  const changeImage = (type) => {
    const images = {
      none: "none",
      basketball: "url(./IMG/T/basketball.png)",
      football: "url(./IMG/T/football.png)",
      volleyball: "url(./IMG/T/volleyball.png)",
      human: "url(./IMG/T/human.jpg)",
      cartoon: "url(./IMG/T/cartoon.jpg)",
      logo: "url(./IMG/T/logo.png)",
    };
    setBackgroundImage(images[type] || "none");
    setSelectedButton(type);
  };

  return (
    <div id="container">
      <div id="field" style={{ width: fieldWidth, height: fieldHeight }}>
        <div
          id="ball"
          style={{
            left: position.x,
            top: position.y,
            width: diameter,
            height: diameter,
            transform: `rotate(${rotation}deg)`,
            backgroundImage,
            position: "relative",
          }}
        />
      </div>

      <div id="control">
        <button
          id="run"
          className={`btn ${running ? "btn-danger" : "btn-success"} me-4`}
          onClick={runClick}
        >
          {running ? (
            <span className="bi bi-pause">&nbsp;Pause</span>
          ) : (
            <span className="bi bi-play">&nbsp;Run</span>
          )}
        </button>

        <div className="conbox">
        {[
          "none",
          "basketball",
          "football",
          "volleyball",
          "human",
          "cartoon",
          "logo",
        ].map((type) => (
          <button
            key={type}
            className={`btn ${selectedButton === type ? 'btn-primary' : 'btn-dark'} me-1`}
            onClick={() => changeImage(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Animation;
