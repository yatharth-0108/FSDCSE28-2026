import React, { useState } from "react";
import image from "../assets/cat.png";

function StateHandling() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const [catHeight, setCatHeight] = useState(200);
  const [catWidth, setCatWidth] = useState(200);
  const [catAngle, setCatAngle] = useState(30);

  function changeColor() {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));
  }

  function enhanceHeight() {
    setCatHeight(catHeight + 10);
  }

  function enhanceWidth() {
    setCatWidth(catWidth + 10);
  }

  function rotate() {
    setCatAngle(catAngle + 30);
  }

  return (
    <div>
      <h2>Change BG Color</h2>

      <div
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          border: "2px solid white",
          height: "200px",
          width: "300px",
        }}
      >
        <img
          src={image}
          alt="cat"
          height={catHeight}
          width={catWidth}
          style={{
            transform: `rotate(${catAngle}deg)`,
          }}
        />
      </div>

      <br />

      <button onClick={changeColor}>Change BG Color</button>

      <button onClick={enhanceHeight}>Increase Height</button>

      <button onClick={enhanceWidth}>Increase Width</button>

      <button onClick={rotate}>Rotate</button>

      <h3>
        Height: {catHeight}px | Width: {catWidth}px | Angle: {catAngle}°
      </h3>
    </div>
  );
}

export default StateHandling;
