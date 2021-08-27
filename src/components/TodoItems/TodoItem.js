import React from "react";
import PropTypes from "prop-types";
import { useDrag, useDrop } from "react-dnd";

import styles from "./TodoItems.module.css";

import check from "../../svgs/check.svg";
import x from "../../svgs/x.svg";

import checkComplete from "../../svgs/checkComplete.svg";
import xComplete from "../../svgs/xComplete.svg";

import DragTypes from "./DragTypes.js";

const TodoItem = ({ item, index, authData, todoData }) => {
  /**
   * removeHelper
   *
   * @param {Object} e - Event object.
   *
   * We need to stop bubbling up because it was just triggering
   * the complete item action.
   */
  const removeHelper = (e) => {
    e.stopPropagation();
    todoData.removeTodo({ ...item, index }, authData);
  };

  const [, drag] = useDrag({
    item: { type: DragTypes.TODO_ITEM, data: { ...item, index } },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: DragTypes.TODO_ITEM,
    drop: (itemBeingDragged) => {
      todoData.swapTodoItems(
        itemBeingDragged.data,
        { ...item, index },
        authData
      );
    },
  });

  const checkImg = item.completed ? checkComplete : check;
  const xImg = item.completed ? xComplete : x;

  const complete = () => {
    todoData.completeTodo({ ...item, index }, authData);
  };

  return (
    <li
      data-testid={item.IDNumber}
      className={`${styles.li} ${item.completed ? styles.completed : ""}`}
      onClick={complete}
      ref={drag}
    >
      <span className={styles.span}>
        <img
          src={checkImg}
          alt="Completed!"
          className={`${styles.check} ${
            item.completed ? styles.show : styles.hide
          }`}
        />
      </span>
      <p className={styles.p} ref={drop}>
        {item.todo}
      </p>
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
  authData: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    authentication: PropTypes.object.isRequired,
    setToken: PropTypes.func.isRequired,
  }).isRequired,
  todoData: PropTypes.shape({
    completeTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    swapTodoItems: PropTypes.func.isRequired,
  }).isRequired,
};

export default TodoItem;
