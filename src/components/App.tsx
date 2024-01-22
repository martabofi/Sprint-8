import { Suspense } from "react";
import "../styles/index.css";
import { ContextProvider } from "../context/Context";
import BalanceExpense from "./balanceExpense/BalanceExpense";
import GraphData from "./graphData/GraphData";

function App() {

  return (
    <ContextProvider>
        <div className="w-96">
          <BalanceExpense></BalanceExpense>
          <br />
          <GraphData></GraphData>
        </div>
    </ContextProvider>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
