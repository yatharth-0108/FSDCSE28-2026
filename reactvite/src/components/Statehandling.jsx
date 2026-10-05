import React, { useState } from "react";

function StateHandling() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const [count, setCount] = useState(50);

  function increment() {
    setCount(count + 20);
  }

  function decrement() {
    setCount(count - 20);
  }

  function changeColor() {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));
  }

  return (
    <div>
      <h2>Change BG</h2>

      <div
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          border: "2px solid white",
          height: "200px",
          width: "300px",
        }}
      ></div>

      <br />

      <button onClick={changeColor}>Change Color</button>

      <h2>Count: {count}</h2>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default StateHandling;
