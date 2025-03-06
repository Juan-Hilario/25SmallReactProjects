//import "./styles.css";
import { useState, useEffect } from "react";
export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtil(length) {
    return Math.floor(Math.random() * length);
  }
  function handleCreateRandomColor() {
    if (typeOfColor === "hex") {
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColorUtil(hex.length)];
      }
      console.log(hexColor);
      setColor(hexColor);
    } else if (typeOfColor === "rgb") {
      const red = randomColorUtil(256);
      const green = randomColorUtil(256);
      const blue = randomColorUtil(256);
      setColor(`rgb(${red},${green},${blue})`);
    }
  }
  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomColor("rgb");
    else handleCreateRandomColor("hex");
  }, [typeOfColor]);
  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button onClick={() => handleCreateRandomColor()}>
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontsize: "60px",
          marginTop: "40px",
          flexDirection: 'column'
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
