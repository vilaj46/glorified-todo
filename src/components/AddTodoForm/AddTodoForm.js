import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styles from "./AddTodoForm.module.css";

const AddTodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const didAdd = addTodo({
      todo: value,
      IDNumber: value + Math.random(10000),
      completed: false,
    });
    if (didAdd) {
      setValue("");
      setShowWarning(false);
    } else {
      console.log(didAdd);
      setShowWarning(true);
    }
  };

  const warningDisplay = showWarning ? styles.display : styles.hide;

  return (
    <Form className={styles.form} onSubmit={(e) => onSubmit(e)}>
      <Form.Control
        size="lg"
        type="text"
        placeholder="Todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.input}
        onSubmit={(e) => onSubmit(e)}
      />
      <div className={styles.buttonContainer}>
        <span className={`${styles.warning} ${warningDisplay}`}>
          You must write something!
        </span>
        <Button
          onClick={(e) => onSubmit(e)}
          data-testid="add-todo"
          className={styles.button}
        >
          Add
        </Button>
      </div>
    </Form>
  );
};

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
