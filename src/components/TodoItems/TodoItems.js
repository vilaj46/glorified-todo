import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PropTypes from "prop-types";

import TodoItem from "./TodoItem";

import styles from "./TodoItems.module.css";

const TodoItems = ({ todos, completeTodo, removeTodo, swapTodoItems }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <ul className={styles.ul}>
        {todos.map((item, index) => {
          return (
            <TodoItem
              item={item}
              key={item.IDNumber}
              index={index}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              swapTodoItems={swapTodoItems}
            />
          );
        })}
      </ul>
    </DndProvider>
  );
};

TodoItems.propTypes = {
  todos: PropTypes.array.isRequired,
  completeTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  swapTodoItems: PropTypes.func.isRequired,
};

export default TodoItems;
