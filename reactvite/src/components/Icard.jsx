import React from "react";

function Icard({data}) {
  return (
    <div
      style={{
        color: "red",
        border: "2px solid yellow",
        height: "400px",
        width: "200px",
      }}
    >
      <img src={data.pic} height={200} width={200} alt="Student" />
      <h2>NAME: {data.name}</h2>
      <h2>ROLLNO: {data.rollNo}</h2>
      <h2>COLLEGE: {data.college}</h2>
    </div>
  );
}

export default Icard;
