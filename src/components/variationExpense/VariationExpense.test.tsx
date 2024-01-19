import { render } from "@testing-library/react"
import VariationExpense from "./VariationExpense"
import {test, expect} from "vitest"
import { ContextProvider } from "../../context/Context"

test("Renders the VariationExpense component", () => {
    render(
      <ContextProvider>
        <VariationExpense />
      </ContextProvider>
    );
    expect(true).toBeTruthy();
  });

