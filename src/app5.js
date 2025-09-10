import React, { useState, useEffect } from "react";

function TimeDisplay(props) {
  return <h2>{props.time}</h2>;
}

export default function ClockApp() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Đồng hồ</h1>
      <TimeDisplay time={time} />
    </div>
  );
}
