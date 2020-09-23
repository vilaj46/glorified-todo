import React from "react";
import { Route, Switch } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";

import styles from "./App.module.css";

// Pages
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import TodoItems from "../TodoItems/TodoItems";

import Header from "../Header/Header";
import AddTodoForm from "../AddTodoForm/AddTodoForm";

// Hooks
import useTodos from "./useTodos";

const App = () => {
  const [todos, addTodo, completeTodo, removeTodo, swapTodoItems] = useTodos();
  return (
    <Jumbotron>
      <div className={styles.top}>
        <Header />
        <Route
          path="/"
          exact
          render={() => <AddTodoForm addTodo={addTodo} />}
        />
      </div>

      <Switch>
        <Route path="/" exact>
          <TodoItems
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            swapTodoItems={swapTodoItems}
          />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/signup" exact>
          <SignupPage />
        </Route>
      </Switch>
    </Jumbotron>
  );
};

export default App;
