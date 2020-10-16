import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PropTypes from "prop-types";

import TodoItem from "./TodoItem";

import styles from "./TodoItems.module.css";

const TodoItems = ({ authData, todoData }) => {
  const [loaded, setLoaded] = useState(false);
  const [currentTodos, setCurrentTodos] = useState(todoData.todos);
  useEffect(() => {
    if (loaded === false && authData.isAuthenticated) {
      setCurrentTodos(authData.authentication.todos);
      todoData.setInitialTodos(authData.authentication.todos);
    } else if (loaded && authData.isAuthenticated) {
      setCurrentTodos(authData.authentication.todos);
    } else {
      setCurrentTodos(todoData.todos);
    }
    setLoaded(true);
  }, [loaded, setLoaded, setCurrentTodos, authData, todoData]);

  // On todos load, check if we have todos.
  return (
    <DndProvider backend={HTML5Backend}>
      <ul className={styles.ul}>
        {currentTodos.map((item, index) => {
          return (
            <TodoItem
              item={item}
              key={item.IDNumber}
              index={index}
              todoData={todoData}
              authData={authData}
            />
          );
        })}
      </ul>
    </DndProvider>
  );
};

TodoItems.propTypes = {
  authData: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    authentication: PropTypes.object.isRequired,
    setToken: PropTypes.func.isRequired,
  }).isRequired,
  todoData: PropTypes.shape({
    todos: PropTypes.array.isRequired,
    completeTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    swapTodoItems: PropTypes.func.isRequired,
    setInitialTodos: PropTypes.func.isRequired,
  }).isRequired,
};

export default TodoItems;
