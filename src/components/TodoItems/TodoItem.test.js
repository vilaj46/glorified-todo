import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoItem from "./TodoItem";

const MOCK_ITEM = {
  todo: "Food Shopping",
  IDNumber: "Food-Shopping12345",
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
      removeTodo={() => {
        MOCK_ITEM.todo = "";
        MOCK_ITEM.IDNumber = "";
        MOCK_ITEM.completed = false;
      }}
    />
  );
};

test("renders TodoItem", () => {
  setup(MOCK_ITEM);
});

test("completes TodoItem", async () => {
  const { findAllByTestId, rerender } = setup(MOCK_ITEM);
  // Was getting a bug where two elements were matching with the id.
  const li = await findAllByTestId(/Food-Shopping12345/);
  fireEvent.click(li[0]);
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

  expect(li[0].className).toBe("li completed");
});

test("removes TodoItem", async () => {
  const { findByTestId, rerender } = setup(MOCK_ITEM);
  const button = await findByTestId(/Food-Shopping12345-button/);
  fireEvent.click(button);
  rerender(
    <TodoItem
      item={MOCK_ITEM}
      index={0}
      completeTodo={() => {
        MOCK_ITEM.completed = !MOCK_ITEM.completed;
      }}
      removeTodo={() => {
        MOCK_ITEM.todo = "";
        MOCK_ITEM.IDNumber = "";
        MOCK_ITEM.completed = false;
      }}
    />
  );

  await findByTestId(/-button/);
});
