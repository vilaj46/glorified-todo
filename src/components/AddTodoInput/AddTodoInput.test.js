import React from "react";
import { render } from "@testing-library/react";
import AddTodoInput from "./AddTodoInput";

test("renders AddTodoInput component", () => {
  const { getByPlaceholderText } = render(<AddTodoInput />);
  const input = getByPlaceholderText(/Todo.../i);
  expect(input).toBeInTheDocument();
});
