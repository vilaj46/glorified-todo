import React from "react";
import PropTypes from "prop-types";

import TodoItem from "./TodoItem";

import styles from "./TodoItems.module.css";

const TodoItems = ({ todos, completeTodo, removeTodo }) => {
  return (
    <ul className={styles.ul}>
      {todos.map((item, index) => {
        return (
          <TodoItem
            item={item}
            key={item.IDNumber}
            index={index}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        );
      })}
    </ul>
  );
};

TodoItems.propTypes = {
  todos: PropTypes.array.isRequired,
  completeTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoItems;
