import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App", () => {
  render(<App />);
});

test("renders header", () => {
  const { getByText } = render(<App />);
  const header = getByText(/My Glorified To Do List/i);
  expect(header).toBeInTheDocument();
});
