import { useState } from "react";
import "./Counter.css";

function Counter(props) {
    const [value, setValue] = useState(props.value || 0)

    function increment(){
        // value = value + 1
        setValue(value + 1)
        console.log(value)
    }

    function decrement(){
        // value = value - 1
        setValue(value - 1)
        console.log(value)
    }

  return (
    <div className = "counter-box">
      <h3 className="counter-name">{props.Name || "CounterD"}</h3>
      <button className="btn btn-danger" onClick={decrement}>-</button>
      <span className="counter-value">{value}</span>
      <button className="btn btn-success" onClick={increment}>+</button>
    </div>
  );
}

export default Counter;