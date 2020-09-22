import React from "react";
import PropTypes from "prop-types";

import styles from "./TodoItems.module.css";

const TodoItem = ({ item, index, completeTodo }) => {
  return (
    <li
      className={`${styles.li} ${item.completed ? styles.completed : ""}`}
      onClick={() => completeTodo({ ...item, index })}
    >
      {/* <span className={styles.span}>^</span> */}
      <p className={styles.p}>{item.todo}</p>
      <span className={`${styles.span} ${styles.remove}`}>X</span>
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
};

export default TodoItem;
