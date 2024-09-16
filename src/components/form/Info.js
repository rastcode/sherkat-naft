import React from "react";

function Info({ className, placeholder, value }) {
  return (
    <div className={className}>
      <div className="info-bot">
      <p style={{ wordSpacing: "7px" }}>{placeholder}</p>
      <p>{value}</p>
      </div>
     
    </div>
  );
}

export default Info;
