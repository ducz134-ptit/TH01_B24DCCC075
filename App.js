import React, {useState} from "react";

function DisplayNumber({value}) {
  return <h2>Giá trị hiện tại: {value}</h2>;
}

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div style={{padding: 20}}>
      <DisplayNumber value={count} />
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default CounterApp;
