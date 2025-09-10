import React, { useState } from "react";


function DisplayNumber(props) {
  return <h2>Số hiện tại: {props.value}</h2>;
}

export default function CounterApp() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Ứng dụng Đếm số</h1>

      <DisplayNumber value={count} />

      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}
