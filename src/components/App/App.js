import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

import styles from "./App.module.css";

import AddTodoForm from "../AddTodoForm/AddTodoForm";
import TodoItems from "../TodoItems/TodoItems";

import useTodos from "./useTodos";

function App() {
  const [todos, addTodo, completeTodo, removeTodo, swapTodoItems] = useTodos();
  return (
    <Jumbotron>
      <div className={styles.top}>
        <header className={styles.header}>
          <h1>My Glorified To Do List</h1>
        </header>
        <AddTodoForm addTodo={addTodo} />
      </div>
      <TodoItems
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        swapTodoItems={swapTodoItems}
      />
    </Jumbotron>
  );
}

export default App;
