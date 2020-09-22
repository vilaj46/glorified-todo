import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styles from "./AddTodoForm.module.css";

const AddTodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo({
      todo: value,
      IDNumber: value + Math.random(10000),
      completed: false,
    });
    setValue("");
  };

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
      <Button
        onClick={(e) => onSubmit(e)}
        data-testid="add-todo"
        className={styles.button}
      >
        Add
      </Button>
    </Form>
  );
};

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
