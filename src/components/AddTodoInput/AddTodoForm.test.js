import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import App from "../App/App";
import AddTodoForm from "./AddTodoForm";

test("renders AddTodoForm component", () => {
  render(<AddTodoForm addTodo={() => {}} />);
});

test("input should change value", () => {
  const { getByPlaceholderText } = render(<AddTodoForm addTodo={() => {}} />);
  const input = getByPlaceholderText(/Todo.../);
  fireEvent.change(input, { target: { value: "Food shopping" } });
  expect(input.value).toBe("Food shopping");
});

test("button should add item to list", async () => {
  const { getByTestId, getByPlaceholderText, findByText } = render(<App />);

  const input = getByPlaceholderText(/Todo.../);
  fireEvent.change(input, { target: { value: "Food shopping" } });

  const button = getByTestId("add-todo");
  fireEvent.submit(button);

  // Will fail if we cannot find the new list item.
  await findByText(/Food shopping/i);
});
