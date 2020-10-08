import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";

import styles from "./App.module.css";

// Pages
import FourOhPage from "../FourOhPage/FourOhPage";
import TodoItems from "../TodoItems/TodoItems";
import ProfilePage from "../ProfilePage/ProfilePage";
import AuthenticationPage from "../AuthenticationPage/AuthenticationPage";

import Header from "../Header/Header";
import AddTodoForm from "../AddTodoForm/AddTodoForm";

// Hooks
import useTodos from "../hooks/useTodos";
import useAuthentication from "../hooks/useAuthentication";

// Helper Functions
import onLoad from "./funcs/onLoad.js";
import isValidToken from "./funcs/isValidToken.js";

const App = () => {
  const [todos, addTodo, completeTodo, removeTodo, swapTodoItems] = useTodos();
  const [authentication, setToken, setProfileKey] = useAuthentication();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadedHook = { loaded, setLoaded };
    onLoad(loadedHook, authentication.exp, setToken);
  }, [loaded, setLoaded, authentication, setToken]);

  const isAuthenticated = isValidToken(authentication.token);

  return (
    <Jumbotron className={styles.fixedPadding}>
      <div className={styles.width}>
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
              <AuthenticationPage setToken={setToken} page="login" />
            )}
          </Route>
          <Route path="/signup" exact>
            {isAuthenticated ? (
              <Redirect to="/profile" />
            ) : (
              <AuthenticationPage setToken={setToken} page="signup" />
            )}
          </Route>
          <Route path="/profile" exact>
            {isAuthenticated ? (
              <ProfilePage
                authentication={authentication}
                setProfileKey={setProfileKey}
              />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route component={FourOhPage} />
        </Switch>
      </div>
    </Jumbotron>
  );
};

export default App;
