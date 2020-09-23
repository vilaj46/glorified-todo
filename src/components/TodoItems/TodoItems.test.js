import React from "react";
import { render } from "@testing-library/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import TodoItems from "./TodoItems";

const MOCK_ITEM = {
  todo: "Food Shopping",
  IDNumber: "Food-Shopping12345",
  completed: false,
};

const MOCK_ITEM2 = {
  todo: "Clean Computer",
  IDNumber: "Clean-Computer12345",
  completed: false,
};

const setup = (todos) => {
  return render(
    <DndProvider backend={HTML5Backend}>
      <TodoItems
        todos={todos}
        completeTodo={() => {}}
        removeTodo={() => {}}
        swapTodoItems={() => {}}
      />
    </DndProvider>
  );
};

test("renders TodoItems Component", () => {
  const ele = setup([MOCK_ITEM, MOCK_ITEM2]);
});

test("renders TodoItems", async () => {
  const { findByTestId } = setup([MOCK_ITEM, MOCK_ITEM2]);
  const li = await findByTestId(/^Food-Shopping12345$/);
  const li2 = await findByTestId(/^Clean-Computer12345$/);
});
