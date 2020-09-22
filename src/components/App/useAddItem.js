import { useState } from "react";

export default () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (value) => {
    value = value.trim();
    if (value.length > 0) {
      todos.push(value);
      setTodos([...todos]);
    }
  };

  return [todos, addTodo];
};
