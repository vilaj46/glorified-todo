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
  const [authentication, setToken, setProfileKey] = useAuthentication();
  const [
    settings,
    setSettingsOnLoad,
    setInitialSettings,
    setSettingsKey,
  ] = useSettings();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded === false) {
      const settingsInStorage = localStorage.getItem("settings");
      if (settingsInStorage) {
        setSettingsOnLoad(settingsInStorage);
      } else {
        setInitialSettings();
      }
    }

    // Sets up our authentication on page load.
    const loadedHook = { loaded, setLoaded };
    onLoad(loadedHook, authentication.exp, setToken, setInitialTodos);
  }, [
    loaded,
    setLoaded,
    authentication,
    setToken,
    settings,
    setSettingsOnLoad,
    setInitialSettings,
    setInitialTodos,
  ]);

  const isAuthenticated = isValidToken(authentication.token);

  return (
    loaded && (
      <Jumbotron className={styles.fixedPadding}>
        <div className={styles.width}>
          <div className={styles.top}>
            <Header
              authentication={authentication}
              setToken={setToken}
              isAuthenticated={isAuthenticated}
              setInitialTodos={setInitialTodos}
            />
            <Route
              path="/"
              exact
              render={() => (
                <AddTodoForm
                  addTodo={addTodo}
                  isAuthenticated={isAuthenticated}
                  authentication={authentication}
                  setToken={setToken}
                />
              )}
            />
          </div>
          <Switch>
            <Route path="/" exact>
              <TodoItems
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                swapTodoItems={swapTodoItems}
                isAuthenticated={isAuthenticated}
                authentication={authentication}
                setToken={setToken}
                setInitialTodos={setInitialTodos}
              />
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
