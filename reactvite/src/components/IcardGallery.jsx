
import React from "react";
import Icard from "./Icard";
import result from "../assets/result.png";

function IcardGallery() {
  const student = [
    {
      pic: result,
      name: "Yogendra",
      rollNo: "122",
      college: "ABES",
    },
    {
      pic: result,
      name: "Sexu",
      rollNo: "098765",
      college: "ABES",
    },
    {
      pic: result,
      name: "Kisi ko to mile",
      rollNo: "3458654",
      college: "ABES",
    },
    {
      pic: result,
      name: "The yatharth sharma",
      rollNo: "45768",
      college: "ABES",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        border: "2px solid blue",
        padding: "20px",
      }}
    >
      {student.map((element) => (
          <Icard data={element} />
      ))}
    </div>
  );
}

export default IcardGallery;

