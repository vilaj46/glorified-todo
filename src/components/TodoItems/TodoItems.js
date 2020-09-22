import React from "react";
import PropTypes from "prop-types";

const TodoItems = ({ todos }) => {
  return (
    <ul>
      {todos.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
};

TodoItems.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoItems;
