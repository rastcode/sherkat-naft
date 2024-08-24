import React from "react";

import { InputContext } from "../../context/InputContext";
import { useContext } from "react";
function Input({ name, placeholder, type, className, value }) {
  const { information, handelInput } = useContext(InputContext);

  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handelInput(e)}
    />
  );
}

export default Input;
