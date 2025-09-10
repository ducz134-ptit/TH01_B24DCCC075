import React, { useState } from "react";
function TodoItem(props) {
  return <li>{props.text}</li>;
}

export default function TodoApp() {
  const [task, setTask] = useState("");       
  const [taskList, setTaskList] = useState([]); 

  function addTask() {
    if (task.trim() !== "") {
      setTaskList([...taskList, task]); 
      setTask("");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Danh sách công việc</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button onClick={addTask}>Thêm</button>

 
      <ul>
        {taskList.map((item, index) => (
          <TodoItem key={index} text={item} />
        ))}
      </ul>
    </div>
  );
}
