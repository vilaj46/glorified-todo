import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PropTypes from "prop-types";

import TodoItem from "./TodoItem";

import styles from "./TodoItems.module.css";

const TodoItems = ({
  todos,
  completeTodo,
  removeTodo,
  swapTodoItems,
  isAuthenticated,
  authentication,
  setToken,
  setInitialTodos,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [currentTodos, setCurrentTodos] = useState(todos);
  useEffect(() => {
    if (loaded === false && isAuthenticated) {
      setCurrentTodos(authentication.todos);
      setInitialTodos(authentication.todos);
    } else if (loaded && isAuthenticated) {
      setCurrentTodos(authentication.todos);
    } else {
      setCurrentTodos(todos);
    }
    setLoaded(true);
  }, [
    loaded,
    setLoaded,
    setCurrentTodos,
    authentication,
    isAuthenticated,
    todos,
    setInitialTodos,
  ]);

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
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              swapTodoItems={swapTodoItems}
              isAuthenticated={isAuthenticated}
              authentication={authentication}
              setToken={setToken}
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
  isAuthenticated: PropTypes.bool.isRequired,
  authentication: PropTypes.object.isRequired,
  setToken: PropTypes.func.isRequired,
  setInitialTodos: PropTypes.func.isRequired,
};

export default TodoItems;
