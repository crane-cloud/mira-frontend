import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const {
    name, value, placeholder, onChange, required
  } = props;

  return (
    <input
      className={styles.Input}
      type="text"
      placeholder={`${placeholder}${required ? ' *' : ''}`}
      name={name}
      value={value}
      onChange={(e) => {
        onChange(e);
      }}
    />
  );
}

export default Input;
