import React, { useState } from "react";
function ColorBox(props) {
  const styleBox = {
    width: "200px",
    height: "200px",
    margin: "20px auto",
    backgroundColor: props.color,
    border: "2px solid black"
  };

  return <div style={styleBox}></div>;
}

export default function ColorApp() {
  const colors = ["red", "green", "blue", "yellow"];
  const [color, setColor] = useState("red"); 
  function changeColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex]);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Ứng dụng Đổi màu nền</h1>
      
 
      <ColorBox color={color} />
      <button onClick={changeColor}>Đổi màu</button>
    </div>
  );
}
