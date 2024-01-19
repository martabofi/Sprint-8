import React, { createContext, useContext, useState, ReactNode } from "react";
import { useTranslation } from 'react-i18next';

interface Props {
  weeksArray: WeekExpenses[];
  totalWeekBalance: number;
  todayExpense: number;
  yesterdayExpense: number;
  percentageChange: number;
  currentWeek: number;
  changeWeek: (direction: "next" | "prev") => void;
  weekdays: string[];
  expenses: number[];
  sign: string;
}

interface WeekExpenses {
  [key: string]: number;
  Dilluns: number;
  Dimarts: number;
  Dimecres: number;
  Dijous: number;
  Divendres: number;
  Dissabte: number;
  Diumenge: number;
}

export const Context = createContext<Props | undefined>(undefined);

export const useElements: () => Props = (): Props => {
  const context = useContext(Context);
  if (context == null) {
    throw new Error("useElements must be used within a ContextProvider");
  }
  return context;
};

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const {t} = useTranslation();

  const weeksArray: WeekExpenses[] = [
    {
      Dilluns: 250,
      Dimarts: 470,
      Dimecres: 410,
      Dijous: 380,
      Divendres: 240,
      Dissabte: 470,
      Diumenge: 490,
    },
    {
      Dilluns: 340,
      Dimarts: 270,
      Dimecres: 110,
      Dijous: 480,
      Divendres: 440,
      Dissabte: 470,
      Diumenge: 200,
    },
    {
      Dilluns: 200,
      Dimarts: 230,
      Dimecres: 310,
      Dijous: 420,
      Divendres: 300,
      Dissabte: 480,
      Diumenge: 490,
    },
  ];

  const calculateWeekBalance = (balance: WeekExpenses): number => {
    return Object.values(balance).reduce(
      (total, current) => total + current,
      0
    );
  };
  const totalWeekBalance = calculateWeekBalance(weeksArray[currentWeek]);

  const getExpenseForDay = (dayIndex: number): number => {
    const adjustedIndex = dayIndex === -1 || dayIndex === 0 ? 6 : dayIndex - 1;
    const day = Object.keys(weeksArray[currentWeek])[adjustedIndex];
    return weeksArray[currentWeek][day];
  };
  const todayExpense = getExpenseForDay(new Date().getDay());
  const yesterdayExpense = getExpenseForDay(new Date().getDay() - 1);

  const calculatePercentageChange = (
    currentValue: number,
    previousValue: number
  ): number => {
    return ((currentValue - previousValue) / previousValue) * 100;
  };

  const percentageChange = Number(
    calculatePercentageChange(todayExpense, yesterdayExpense).toFixed(2)
  );
  const sign = percentageChange > 0 ? "+" : "";

  const weekdays = Object.keys(weeksArray[currentWeek]).map((day) => t(`days.${day}`));
  const expenses = Object.values(weeksArray[currentWeek]);

  const changeWeek = (direction: "next" | "prev"): void => {
    const newWeek = direction === "next" ? currentWeek + 1 : currentWeek - 1;

    if (newWeek >= 0 && newWeek < weeksArray.length) {
      setCurrentWeek(newWeek);
    }
  };

  const contextValue: Props = {
    weeksArray,
    totalWeekBalance,
    todayExpense,
    yesterdayExpense,
    percentageChange,
    currentWeek,
    changeWeek,
    weekdays,
    expenses,
    sign,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Context;
