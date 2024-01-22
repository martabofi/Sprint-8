import { render } from "@testing-library/react";
import BalanceExpense from "./BalanceExpense";
import { test, expect } from "vitest";
import { ContextProvider } from "../../context/Context";

test("Renders the BalanceExpense component", () => {
  render(
    <ContextProvider>
      <BalanceExpense />
    </ContextProvider>
  );
  expect(true).toBeTruthy();
});