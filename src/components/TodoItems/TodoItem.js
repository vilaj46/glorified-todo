import React from "react";
import PropTypes from "prop-types";

import styles from "./TodoItems.module.css";

import check from "../../svgs/check.svg";
import x from "../../svgs/x.svg";

import checkComplete from "../../svgs/checkComplete.svg";
import xComplete from "../../svgs/xComplete.svg";

const TodoItem = ({ item, index, completeTodo, removeTodo }) => {
  const removeHelper = (e, item) => {
    e.stopPropagation();
    removeTodo({ ...item, index });
  };

  const checkImg = item.completed ? checkComplete : check;
  const xImg = item.completed ? xComplete : x;

  return (
    <li
      data-testid={item.IDNumber}
      className={`${styles.li} ${item.completed ? styles.completed : ""}`}
      onClick={() => completeTodo({ ...item, index })}
    >
      <span className={styles.span}>
        <img src={checkImg} alt="Completed!" className={styles.check} />
      </span>
      <p className={styles.p}>{item.todo}</p>
      <button
        type="button"
        data-testid={`${item.IDNumber}-button`}
        className={`${styles.span} ${styles.remove} ${
          item.completed ? styles.completed : ""
        }`}
        onClick={(e) => removeHelper(e)}
      >
        <img src={xImg} alt="Remove" className={styles.x} />
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
