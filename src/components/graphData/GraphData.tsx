import { useElements } from "../../context/Context";
import { Bar } from "react-chartjs-2";
import TodayExpense from "../todayExpense/TodayExpense";
import VariationExpense from "../variationExpense/VariationExpense";
import { useTranslation } from 'react-i18next'


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

let despeses = [250, 470, 510, 380, 240, 470, 600];
let weekdays = ["dl", "dm", "dc", "dj", "dv", "ds", "dg"];

export const misoptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
      labels: {
        font: {
          family: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
          size: 12,
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          family: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
          size: 12,
        },
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          family: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
          size: 12,
        },
        stepSize: 500,
        max: 650,
        callback: function (value: string | number) {
          return value === 0 || value === 500 ? value : "";
        },
      },
    },
  },
  elements: {
    bar: {
      borderRadius: 5,
    },
  },
};

export default function GraphData() {
  const { weekdays, expenses } = useElements();
  const { t } = useTranslation();

  let midata = {
    labels: weekdays,
    datasets: [
      {
        data: expenses,
        tension: 0.5,
        backgroundColor: [
          "#eb775d",
          "#eb775d",
          "#eb775d",
          "#eb775d",
          "#eb775d",
          "#eb775d",
          "#75b5be",
        ],
        color: "#202020",
      },
    ],
  };
  return (
    <>
      <div className="bg-graphic rounded-3xl p-6">
        <h1 className="font-bold text-2xl text-zinc-700 mb-5">
          {t("DespesesSetmana")}
        </h1>
        <Bar data={midata} options={misoptions} />
        <hr style={{ borderTop: "2px dashed gray", margin: "20px 0" }} />
        <div className="flex justify-between items-center">
          <TodayExpense />
          <VariationExpense />
        </div>
      </div>
    </>
  );
}
