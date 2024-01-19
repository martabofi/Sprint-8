import { render } from "@testing-library/react";
import GraphData from "./GraphData";
import { test, expect } from "vitest";
import { ContextProvider } from "../../context/Context";

test("Renders the GraphData component", () => {
  render(
    <ContextProvider>
      <GraphData />
    </ContextProvider>
  );
  expect(true).toBeTruthy();
});
