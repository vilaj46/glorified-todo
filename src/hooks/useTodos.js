import { useState } from "react";
import api from "../api/index.js";

export default () => {
  const [todos, setTodos] = useState([]);

  /**
   * addTodo
   *
   * @param {Object} item - IDNumber, completed, todo.
   * @param {Object} auth - authData from the App component.
   * @return {Boolean} Whether we added the TodoItem.
   *
   * Initially we clean the todo item text by trimming the white space.
   *
   * If our text with the white space trimmed is greater than 0, we can proceed.
   *
   * We replace the items todo with our newly trimmed text.
   * Push the item onto the todo array. Set our todo.
   *
   * If we are logged in, we send an api request to update our todo items in the backend.
   *
   * Return the success of our addition.
   */
  const addTodo = async (item, auth) => {
    const text = item.todo.trim();

    if (text.length > 0) {
      item.todo = text;
      todos.push(item);
      setTodos([...todos]);
      if (auth.isAuthenticated) {
        const response = await api.todos.addTodo(item, auth.authentication);
        if (response.status === 200) {
          auth.setToken(response.token);
        } else {
          // Figure out our error codes.
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  };

  /**
   * completedTodo
   *
   * @param {Object} item - todo, IDNumber, completed, index.
   * @param {Object} auth - authData from the App component.
   * @return {Boolean} Whether we added the TodoItem.
   *
   * Since we are given the index, we can check immediately if the
   * todos[index] matches our id. This way we won't have to iterate over the array.
   * If it is the correct index, we toggle the completed property.
   * Then check for authentication and do the same thing on the backend returning our new token.
   *
   * If our index isn't lined up properly and the IDNumbers don't match,
   * we search for the IDNumber in our array. Then do the same thing.
   */
  const completeTodo = async (item, auth) => {
    const { index, IDNumber } = item;
    if (todos[index].IDNumber === IDNumber) {
      todos[index].completed = !todos[index].completed;

      if (auth.isAuthenticated) {
        const data = { ...todos[index], index: index };
        const response = await api.todos.completeTodo(
          data,
          auth.authentication
        );
        if (response.status === 200) {
          auth.setToken(response.token);
        } else {
          // Figure out our error codes.
          return false;
        }
      }
      setTodos([...todos]);
      return true;
    } else {
      const searchedIndex = searchItemIndex(IDNumber, todos);
      if (searchedIndex === -1) return false; // Not found.
      todos[searchedIndex].completed = !todos[searchedIndex].completed;
      if (auth.isAuthenticated) {
        const data = { ...todos[searchedIndex], index: searchedIndex };
        const response = api.todos.completeTodo(data, auth.authentication);

        if (response.status === 200) {
          auth.setToken(response.token);
        } else {
          // Figure out error codes.
          return false;
        }
      }
      setTodos([...todos]);
      return true;
    }
  };

  /**
   * removeTodo
   *
   * @param {Object} item - todo, IDNumber, completed, index.
   * @param {Object} auth - authData from the app component
   * @return {Boolean} Whether we added the TodoItem.
   *
   * Since we are given the index, we can check immediately if the
   * todos[index] matches our id. This way we won't have to iterate over the array.
   * If it is the correct index, remove it from the array and update our backend as well.
   *
   *
   * If our index isn't lined up properly and the IDNumbers don't match,
   * we search for the IDNumber in our array. Then do the same thing.
   */
  const removeTodo = async (item, auth) => {
    const { index, IDNumber } = item;

    if (todos[index].IDNumber === IDNumber) {
      todos.splice(index, 1);
      if (auth.isAuthenticated) {
        const response = await api.todos.removeTodo(
          { index, IDNumber },
          auth.authentication
        );

        if (response.status === 200) {
          auth.setToken(response.token);
        } else {
          // Figure out error codes.
          return false;
        }
      }
      setTodos([...todos]);
      return true;
    } else {
      const searchedIndex = searchItemIndex(IDNumber, todos);
      if (searchedIndex === -1) return false; // Not found.
      todos.splice(searchedIndex, 1);
      if (auth.isAuthenticated) {
        const response = await api.todos.removeTodo(
          { index: searchedIndex, IDNumber },
          auth.authentication
        );
        if (response.status === 200) {
          auth.setToken(response.token);
        } else {
          // Figure out error codes.
          return false;
        }
      }
      setTodos([...todos]);
      return true;
    }
  };

  /**
   * swapTodoItems
   *
   * @param {Object} item1 - Item being dragged / dropped.
   * @param {*} item2 - Item being dropped on.
   *
   * Swap the items in the array.
   */
  const swapTodoItems = (item1, item2) => {
    let newItem1 = { ...item1, index: item2.index };
    let newItem2 = { ...item2, index: item1.index };
    todos[item1.index] = newItem2;
    todos[item2.index] = newItem1;
    setTodos([...todos]);
  };

  /**
   * setInitialTodos
   *
   * @param {Array} todos - Todos Array decoded from storage on application load.
   *
   * This function is called in the onLoad function in our App component.
   */
  const setInitialTodos = (todos) => {
    setTodos([...todos]);
  };

  /**
   * searchItemIndex
   *
   * @param {String} IDNumber  - The id we are searching for.
   * @param {Array} todos - The current todos state.
   * @return {Number}
   *
   * Search the array for the matching IDNumbers.
   * If it is found, return the index. Otherwise, return -1.
   */
  const searchItemIndex = (IDNumber, todos) => {
    for (let i = 0; i < todos.length; i++) {
      const todo = todos[i];
      if (todo.IDNumber === IDNumber) {
        return i;
      }
    }
    return -1;
  };

  return [
    todos,
    addTodo,
    completeTodo,
    removeTodo,
    swapTodoItems,
    setInitialTodos,
  ];
};
