import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./AddTodoForm.module.css";

const AddTodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
  };

  return (
    <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Todo..."
        value={value}
        className={styles.input}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="button"
        className={styles.button}
        onClick={(e) => onSubmit(e)}
        data-testid="add-todo"
      >
        Add
      </button>
    </form>
  );
};

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
