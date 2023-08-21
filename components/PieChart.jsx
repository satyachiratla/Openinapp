"use client";

import { useState } from "react";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function PieChart() {
  const [state, setState] = useState({
    series: [55, 31, 14],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      colors: ["#16a34a", "#fde047", "#ef4444"],
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  return (
    <div className="z-20">
      <Chart
        options={state.options}
        series={state.series}
        type="pie"
        width={240}
        height={200}
      />
    </div>
  );
}
