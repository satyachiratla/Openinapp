"use client";

import { useState } from "react";
import dynamic from 'next/dynamic'
    
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function ChartBar() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
        width: "100%",
      },
      xaxis: {
        categories: [0, "Week 1", "Week 2", "Week 3", "Week 4", ""],
      },
      yaxis: {
        categories: [100, 200, 300, 400, 500],
      },
      stroke: {
        curve: "smooth",
      },
      colors: ["#16a34a", "#ef4444"],
      legend: {
        show: false,
      },
    },
    series: [
      {
        data: [100, 420, 150, 450, 180, 250],
      },
      {
        data: [200, 390, 200, 300, 220, 440],
      },
    ],
  });
  return (
    <div className="bg-white px-4 py-8 rounded-2xl">
      <div className="flex justify-between items-center mx-4 mb-4">
        <div>
          <h3>Activities</h3>
          <span className="text-gray-500">May-June 2021</span>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-red-500 h-1 w-2 rounded-full p-1" />
            <p>Guest</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-green-600 h-1 w-2 rounded-full p-1" />
            <p>User</p>
          </div>
        </div>
      </div>
      <Chart
        options={state.options}
        series={state.series}
        type="line"
        width={state.options.chart.width}
        height="300"
      />
    </div>
  );
}
