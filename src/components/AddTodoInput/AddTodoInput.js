import React, { useState } from "react";

import styles from "./AddTodoInput.module.css";

const AddTodoInput = () => {
  const [value, setValue] = useState("");
  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Todo..."
        value={value}
        className={styles.input}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" className={styles.button}>
        Add
      </button>
    </form>
  );
};

export default AddTodoInput;
