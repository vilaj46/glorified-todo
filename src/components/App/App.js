import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

import styles from "./App.module.css";

import AddTodoForm from "../AddTodoInput/AddTodoForm";
import TodoItems from "../TodoItems/TodoItems";

import useAddItem from "./useAddItem";

function App() {
  const [todos, addTodo] = useAddItem();
  return (
    <Jumbotron>
      <header className={styles.header}>
        <h1>My Glorified To Do List</h1>
      </header>
      <AddTodoForm addTodo={addTodo} />
      <TodoItems todos={todos} />
    </Jumbotron>
  );
}

export default App;
