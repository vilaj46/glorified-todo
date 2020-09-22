import React from "react";
import PropTypes from "prop-types";

import styles from "./TodoItems.module.css";

const TodoItem = ({ item, index, completeTodo, removeTodo }) => {
  const removeHelper = (e, item) => {
    e.stopPropagation();
    removeTodo({ ...item, index });
  };

  return (
    <li
      data-testid={item.IDNumber}
      className={`${styles.li} ${item.completed ? styles.completed : ""}`}
      onClick={() => completeTodo({ ...item, index })}
    >
      {/* <span className={styles.span}>^</span> */}
      <p className={styles.p}>{item.todo}</p>
      <button
        type="button"
        data-testid={`${item.IDNumber}-button`}
        className={`${styles.span} ${styles.remove} ${
          item.completed ? styles.completed : ""
        }`}
        onClick={(e) => removeHelper(e)}
      >
        X
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  item: PropTypes.shape({
    todo: PropTypes.string.isRequired,
    IDNumber: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  completeTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoItem;
