import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoItem from "./TodoItem";

const MOCK_ITEM = {
  todo: "Food Shopping",
  IDNumber: "Food Shopping12345",
  completed: false,
};

const setup = (mockItem) => {
  return render(
    <TodoItem
      item={mockItem}
      index={0}
      completeTodo={() => {
        MOCK_ITEM.completed = !MOCK_ITEM.completed;
      }}
      removeTodo={() => {}}
    />
  );
};

test("renders TodoItem", () => {
  setup(MOCK_ITEM);
});

test("completes TodoItem", async () => {
  let { findByTestId, rerender } = setup(MOCK_ITEM);
  const li = await findByTestId(/Food Shopping12345/);

  fireEvent.click(li);
  rerender(
    <TodoItem
      item={MOCK_ITEM}
      index={0}
      completeTodo={() => {
        MOCK_ITEM.completed = !MOCK_ITEM.completed;
      }}
      removeTodo={() => {}}
    />
  );

  expect(li.className).toBe("li completed");
});
