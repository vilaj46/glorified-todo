import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";

import styles from "./App.module.css";

import AddTodoInput from "../AddTodoInput/AddTodoInput";

function App() {
  // const [items] = useState([]);

  return (
    <Jumbotron>
      <header className={styles.header}>
        <h1>My Glorified To Do List</h1>
      </header>
      <AddTodoInput />
    </Jumbotron>
  );
}

export default App;
