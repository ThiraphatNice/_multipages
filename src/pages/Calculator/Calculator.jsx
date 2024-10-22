import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [display, setDisplay] = useState('');
  const [lastResult, setLastResult] = useState(null);
  const [lastExpression, setLastExpression] = useState('');
  const [operationSet, setOperationSet] = useState(false);

  // Function to append value to the display
  const inputValue = (value) => {
    if (display === 'Error') {
      setDisplay(value);
    } else if (operationSet) {
      setDisplay(value);
      setOperationSet(false);
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  // Function to clear all data
  const clearAll = () => {
    setDisplay('');
    setLastResult(null);
    setLastExpression('');
  };

  // Function to delete the last character from the display
  const clearLast = () => {
    setDisplay((prev) => (prev === 'Error' ? '' : prev.slice(0, -1)));
  };

  // Function to evaluate the expression
  const calculate = () => {
    try {
      if (display === 'Error') return;

      if (lastExpression && display === lastResult) {
        setDisplay(eval(lastExpression).toString());
        setLastResult(eval(lastExpression).toString());
      } else {
        setLastExpression(display);
        setDisplay(eval(display).toString());
        setLastResult(eval(display).toString());
      }
      setOperationSet(true);
    } catch (error) {
      setDisplay('Error');
    }
  };
  
// Handle keyboard input
const handleKeyboardInput = (event) => {
  const key = event.key;
  if (key >= '0' && key <= '9') {
    inputValue(key);
  } else if (['+', '-', '*', '/'].includes(key)) {
    inputValue(key);
  } else if (key === 'Enter' || key === ' ') {
    calculate();
  } else if (key === 'Backspace') {
    clearLast();
  }
};

  return (
    <div className="calculator-container">
      {/* Display box */}
      <div className="display">
        <input type="text" value={display} disabled />
      </div>
      {/* Numpad */}
      <div className="numpad">
        <button onClick={() => inputValue('7')}>7</button>
        <button onClick={() => inputValue('8')}>8</button>
        <button onClick={() => inputValue('9')}>9</button>
        <button onClick={() => inputValue('/')}>/</button>
        <button onClick={() => inputValue('4')}>4</button>
        <button onClick={() => inputValue('5')}>5</button>
        <button onClick={() => inputValue('6')}>6</button>
        <button onClick={() => inputValue('*')}>*</button>
        <button onClick={() => inputValue('1')}>1</button>
        <button onClick={() => inputValue('2')}>2</button>
        <button onClick={() => inputValue('3')}>3</button>
        <button onClick={() => inputValue('-')}>-</button>
        <button className="zero-btn" onClick={() => inputValue('0')}>0</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => inputValue('+')}>+</button>
      </div>
      {/* Additional buttons */}
      <div className="actions">
        <button onClick={clearAll}>C</button>
        <button onClick={clearLast}>←</button>
      </div>
    </div>
  );
};

export default Calculator;
