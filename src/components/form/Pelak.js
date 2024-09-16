import React from "react";
import { MainContext } from "../../context/MainContext";
import { useContext } from "react";

function Pelak() {
  const { information } = useContext(MainContext);
  const pel =
    (information.forth || "") +
    (information.iran || "") +
    (information.third || "") +
    (information.second || "") +
    (information.first || "");
  const pel1 =
    (information.forth1 || "") +
    (information.iran1 || "") +
    (information.third1 || "") +
    (information.second1 || "") +
    (information.first1 || "");
  return (
    <div className="info">
      <div className="info-bot">
      <p style={{wordSpacing:'7px'}}> پلاک :</p>
      <div className={`${information.pelakCheck ? "kamel" : "pelak-items"}`}>
        <p>
          {pel
            ? `${information.forth ? information.forth : ""}  ${
                information.iran ? information.iran : ""
              }  ${information.third ? information.third : ""} ${
                information.second ? information.second : ""
              } ${information.first ? information.first : ""}  `
            : "--------"}
        </p>
        <p>
          {pel1
            ? `${information.forth1 ? information.forth1 : ""}  ${
                information.iran1 ? information.iran1 : ""
              }  ${information.third1 ? information.third1 : ""} ${
                information.second1 ? information.second1 : ""
              } ${information.first1 ? information.first1 : ""}  `
            : "--------"}
        </p>
        {/* <p>{` ${pel ? pel : "-------"} `}</p>
        <p>{` ${pel1 ? pel1 : "-------"} `}</p> */}
        {/* <p>{`${information.forth1 ? information.forth1 : "------"}`}</p> */}
        {/* <p>{` ${information.forth ? information.forth : "-------"} `}</p>
        <p>{`${information.forth1 ? information.forth1 : "------"}`}</p> */}
      </div>
      </div>
      
    </div>
  );
}

export default Pelak;
