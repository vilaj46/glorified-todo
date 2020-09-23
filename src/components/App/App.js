import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";

import styles from "./App.module.css";

// Pages
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import TodoItems from "../TodoItems/TodoItems";

import Header from "../Header/Header";
import AddTodoForm from "../AddTodoForm/AddTodoForm";

// Hooks
import useTodos from "./useTodos";
import useAuthentication from "./useAuthentication";

const App = () => {
  const [todos, addTodo, completeTodo, removeTodo, swapTodoItems] = useTodos();
  const [authentication, setToken] = useAuthentication();

  const isAuthenticated =
    authentication.username.length > 0 && authentication.token.length > 0;

  return (
    <Jumbotron>
      <div className={styles.top}>
        <Header
          authentication={authentication}
          setToken={setToken}
          isAuthenticated={isAuthenticated}
        />
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
          {isAuthenticated ? (
            <Redirect to="/profile" />
          ) : (
            <LoginPage setToken={setToken} />
          )}
        </Route>
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/profile" exact>
          {isAuthenticated ? <ProfilePage /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Jumbotron>
  );
};

export default App;
