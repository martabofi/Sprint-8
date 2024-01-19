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

// import {describe, test, expect} from "vitest"
// import BalanceExpense from "./BalanceExpense"

// describe("BalanceExpense", () => {
//     test("renders the BalanceExpense component", () => {
//         expect(true).toBe(true);
//     })
// })

// import { render } from "@testing-library/react"

// test('demo', () => {
//     expect(true).toBe(true)
// })

// test("Renders the BalanceExpense component", () => {
//     render(<BalanceExpense />)
//     expect(true).toBeTruthy()
// })
