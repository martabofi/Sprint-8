import { render } from "@testing-library/react";
import TodayExpense from "./TodayExpense";
import { test, expect } from "vitest";
import { ContextProvider } from "../../context/Context";

test("Renders the TodayExpense component", () => {
  render(
    <ContextProvider>
      <TodayExpense />
    </ContextProvider>
  );
  expect(true).toBeTruthy();
});
