import React, { useState } from "react";

function StudentCard(props) {
  const [showDetail, setShowDetail] = useState(false);

  function toggleDetail() {
    setShowDetail(!showDetail);
  }

  return (
    <div style={{
      border: "1px solid black",
      borderRadius: "8px",
      padding: "10px",
      margin: "10px auto",
      width: "250px",
      textAlign: "center"
    }}>
      <h3>{props.name}</h3>
      <button onClick={toggleDetail}>
        {showDetail ? "Ẩn chi tiết" : "Xem chi tiết"}
      </button>

      {showDetail && (
        <div style={{ marginTop: "10px" }}>
          <p>Tuổi: {props.age}</p>
          <p>Lớp: {props.className}</p>
        </div>
      )}
    </div>
  );
}
export default function StudentApp() {
  const students = [
    { name: "Nguyễn Văn A", age: 20, className: "CNTT1" },
    { name: "Trần Thị B", age: 21, className: "CNTT2" },
    { name: "Lê Văn C", age: 19, className: "CNTT3" },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Danh sách sinh viên</h1>

      {students.map((stu, index) => (
        <StudentCard
          key={index}
          name={stu.name}
          age={stu.age}
          className={stu.className}
        />
      ))}
    </div>
  );
}
