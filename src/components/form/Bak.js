import React from "react";

function Bak({ name, value }) {
  return (
    <div className="bak">
      <div className="inner-bak">
        <p style={{ wordSpacing: "7px" }}>{name}</p>
        <p className="bak1">{value}</p>
      </div>
    </div>
  );
}

export default Bak;
