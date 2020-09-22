import { useState } from "react";

export default () => {
  const [todos, setTodos] = useState([]);

  /**
   * addTodo
   *
   * @param {Object} item - A potentially new todo item.
   * @return {Array} todos - a list of todo items with the new todo, addTodo - function which allows us to add a new todo.
   *
   * Checks if our new todo isnt just a blank space.
   * If its not add it to the list.
   */
  const addTodo = (item) => {
    const text = item.todo.trim();
    if (text.length > 0) {
      item.todo = text;
      todos.push(item);
      setTodos([...todos]);
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
  const completeTodo = (item) => {
    const { index, IDNumber } = item;
    if (todos[index].IDNumber === IDNumber) {
      todos[index].completed = !todos[index].completed;
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
    }

    setTodos([...todos]);
  };

  return [todos, addTodo, completeTodo];
};
