import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

import styles from "./App.module.css";

import AddTodoForm from "../AddTodoForm/AddTodoForm";
import TodoItems from "../TodoItems/TodoItems";

import useAddItem from "./useAddItem";

function App() {
  const [todos, addTodo, completeTodo] = useAddItem();
  return (
    <Jumbotron>
      <div className={styles.top}>
        <header className={styles.header}>
          <h1>My Glorified To Do List</h1>
        </header>
        <AddTodoForm addTodo={addTodo} />
      </div>
      <TodoItems todos={todos} completeTodo={completeTodo} />
    </Jumbotron>
  );
}

export default App;
