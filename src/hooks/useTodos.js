import { useState } from "react";
import api from "../api/index.js";

export default () => {
  const [todos, setTodos] = useState([]);

  /**
   * addTodo
   *
   * @param {Object} item - A potentially new todo item.
   * @param {Object} auth - Authentication data.
   * @param {Hook Function} setToken - Set our new token data.
   * @return {Boolean} Whether we added the TodoItem.
   *
   * Checks if our new todo isnt just a blank space.
   * If its not add it to the list.
   */
  const addTodo = async (item, auth, setToken) => {
    const text = item.todo.trim();
    item.todo = text;
    todos.push(item);
    setTodos([...todos]);
    if (text.length > 0) {
      if (auth.isAuthenticated) {
        const response = await api.todos.addTodo(item, auth.authentication);
        if (response.status === 200) {
          setToken(response.token);
        } else {
          // Figure out our error codes.
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
   * @param {Object} item - The todo item we will be completing or uncompleting.
   *
   * Given the item and the current index of the item.
   * First we check if the given index is the one we are completing.
   *
   * If it isn't ( basically if we add drag and drop or item movement),
   * then we will traverse the array checking.
   *
   * Toggle completed on the found item.
   */
  const completeTodo = async (item, auth, setToken) => {
    const { index, IDNumber } = item;
    if (todos[index].IDNumber === IDNumber) {
      todos[index].completed = !todos[index].completed;

      if (auth.isAuthenticated) {
        const data = { ...todos[index], index: index };
        const response = await api.todos.completeTodo(
          data,
          auth.authentication
        );
        setToken(response.token);
      }
    } else {
      let searchedIndex;
      for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        if (todo.IDNumber === IDNumber) {
          searchedIndex = i;
          break;
        }
      }
      todos[searchedIndex].completed = !todos[searchedIndex].completed;
      if (auth.isAuthenticated) {
        const data = { ...todos[searchedIndex], index: searchedIndex };
        const response = api.todos.completeTodo(data, auth.authentication);
        setToken(response.token);
      }
    }

    setTodos([...todos]);
  };

  /**
   * removeTodo
   *
   * @param {Object} item - The todo item we will be removing.
   *
   * Given the item and the current index of the item.
   * First we check if the given index is the one we are removing.
   *
   * If it isn't ( basically if we add drag and drop or item movement),
   * then we will traverse the array checking.
   *
   * Remove the found item.
   */
  const removeTodo = async (item, auth, setToken) => {
    const { index, IDNumber } = item;

    if (todos[index].IDNumber === IDNumber) {
      todos.splice(index, 1);
      if (auth.isAuthenticated) {
        const response = await api.todos.removeTodo(index, auth.authentication);
        setToken(response.token);
      }
    } else {
      let searchedIndex;
      for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        if (todo.IDNumber === IDNumber) {
          searchedIndex = i;
          break;
        }
      }
      todos.splice(searchedIndex, 1);
      if (auth.isAuthenticated) {
        const response = await api.todos.removeTodo(
          searchedIndex,
          auth.authentication
        );
        setToken(response.token);
      }
    }

    setTodos([...todos]);
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

  const setInitialTodos = (todos) => {
    setTodos([...todos]);
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
