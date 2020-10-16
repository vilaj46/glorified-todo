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
import useTodos from "../../hooks/useTodos";
import useSettings from "../../hooks/useSettings";
import useAuthentication from "../../hooks/useAuthentication";

// Helper Functions
import onLoad from "./funcs/onLoad.js";
import isValidToken from "./funcs/isValidToken.js";

const App = () => {
  const [
    todos,
    addTodo,
    completeTodo,
    removeTodo,
    swapTodoItems,
    setInitialTodos,
  ] = useTodos();

  // Custom hooks.
  const [authentication, setToken, setProfileKey] = useAuthentication();
  const [settings, setSettingsOnLoad, setSettingsKey] = useSettings();

  // Local hooks.
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded === false) {
      setSettingsOnLoad();

      // Sets up our authentication and todos on page load.
      const loadedHook = { loaded, setLoaded };
      const authHook = { exp: authentication.exp, setToken };
      onLoad(loadedHook, authHook, setInitialTodos);
    }
  }, [
    loaded,
    setLoaded,
    authentication,
    setToken,
    settings,
    setSettingsOnLoad,
    setInitialTodos,
  ]);

  const isAuthenticated = isValidToken(authentication.token);

  // Our hook data to clean up the amount of props given to each component.
  const authData = { authentication, isAuthenticated, setToken, setProfileKey };
  const todoData = {
    todos,
    addTodo,
    completeTodo,
    removeTodo,
    swapTodoItems,
    setInitialTodos,
  };

  return (
    loaded && (
      <Jumbotron className={styles.fixedPadding}>
        <div className={styles.width}>
          <div className={styles.top}>
            <Header authData={authData} setInitialTodos={setInitialTodos} />
            <Route
              path="/"
              exact
              render={() => (
                <AddTodoForm addTodo={addTodo} authData={authData} />
              )}
            />
          </div>
          <Switch>
            <Route path="/" exact>
              <TodoItems authData={authData} todoData={todoData} />
            </Route>
            <Route path="/login" exact>
              {isAuthenticated ? (
                <Redirect to="/profile" />
              ) : (
                <AuthenticationPage
                  setToken={setToken}
                  page="login"
                  settings={settings}
                  setSettingsKey={setSettingsKey}
                />
              )}
            </Route>
            <Route path="/signup" exact>
              {isAuthenticated ? (
                <Redirect to="/profile" />
              ) : (
                <AuthenticationPage
                  setToken={setToken}
                  page="signup"
                  settings={settings}
                  setSettingsKey={setSettingsKey}
                />
              )}
            </Route>
            <Route path="/profile" exact>
              {isAuthenticated ? (
                <ProfilePage
                  authentication={authentication}
                  setProfileKey={setProfileKey}
                  setToken={setToken}
                />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route component={FourOhPage} />
          </Switch>
        </div>
      </Jumbotron>
    )
  );
};

export default App;
