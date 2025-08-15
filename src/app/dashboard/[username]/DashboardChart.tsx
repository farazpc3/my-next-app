"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import "@/styles/components.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type Props = {
  stats: {
    labels: string[];
    values: number[];
  };
};

export default function DashboardChart({ stats }: Props) {
  const data = {
    labels: stats.labels,
    datasets: [
      {
        labels: "Performance",
        data: "stats.values",
        backgroundColor: "#3b82f6",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="dashboard-chart">
      <Bar data={data} options={options} />
    </div>
  );
}
