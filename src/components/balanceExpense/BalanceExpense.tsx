import React from "react";
import { useElements } from "../../context/Context";
import { useTranslation } from "react-i18next";
import Translation from "../Translation";

const BalanceExpense: React.FC = () => {
  const { totalWeekBalance, currentWeek, weeksArray, changeWeek } =
    useElements();
  const { t } = useTranslation();

  return (
    <>
      <Translation />
      <div className="bg-primary rounded-3xl flex justify-between items-center w-full p-6">
        <div>
          <p className="text-base text-secondary">{t("BalançTotal")}</p>
          <p className="text-3xl text-secondary font-bold">
            {totalWeekBalance} €
          </p>
        </div>
        <div>
          <button
            className="text-xl text-secondary font-bold mr-5"
            onClick={() => changeWeek("prev")}
          >
            🡠
          </button>
          <button
            className="text-xl text-secondary font-bold"
            onClick={() => changeWeek("next")}
          >
            🡢
          </button>
        </div>
      </div>
    </>
  );
};
export default BalanceExpense;
