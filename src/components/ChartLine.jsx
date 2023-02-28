import Chart from "chart.js/auto";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

function labelsData(time) {
  return time.slice(0, 24).map((tm, i) => {
    // if (i % 24 === 0) return tm.split("T").join(" ");
    return tm.split("T")[1];
  });
  //   for(let i = 0; i < time.length)
}

function ChartLine({ hourlyData }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      "y-axis-temperature": {
        ticks: {
          callback: function (context) {
            return context + "°C";
          },
          color: "rgba(215, 71, 15,1)",
        },
      },
      "y-axis-humidity": {
        min: 0,
        ticks: {
          callback: function (context) {
            return context + "%";
          },
          color: "rgba(0, 119, 182,1)",
        },
      },
      "y-axis-precipitation": {
        min: 0,
        ticks: {
          callback: function (context) {
            return context + "mm";
          },
          color: "rgba(39, 174, 96,1)",
        },
      },
      x: {
        ticks: {
          color: "#ddd",
        },
      },
    },
    plugins: {
      legend: {
        align: "end",
        labels: {
          color: "#ddd",
        },
      },
      title: {
        display: true,
        text: "Hourly Temperature",
        color: "#ddd",
      },
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
        },
        wheel: {
          enabled: true,
          speed: 0.1,
        },
        pinch: {
          enabled: true,
        },
        mode: "x",
      },
    },
  };

  const labels = labelsData(hourlyData.hourly.time);

  const data = {
    labels,
    datasets: [
      {
        label: "Temperature",
        data: hourlyData.hourly.temperature_2m.slice(0, 24),
        backgroundColor: "rgba(215, 71, 15, 0.5)",
        borderColor: "rgba(215, 71, 15,1)",
        yAxisID: "y-axis-temperature",
      },
      {
        label: "Humidity",
        data: hourlyData.hourly.relativehumidity_2m.slice(0, 24),
        backgroundColor: "rgba(0, 119, 182, 0.5)",
        borderColor: "rgba(0, 119, 182,1)",
        yAxisID: "y-axis-humidity",
      },
      {
        label: "Precipitation",
        data: hourlyData.hourly.precipitation.slice(0, 24),
        backgroundColor: "rgba(39, 174, 96, 0.5)",
        borderColor: "rgba(39, 174, 96,1)",
        yAxisID: "y-axis-precipitation",
      },
    ],
  };

  return <Line options={options} data={data} />;
}

export default ChartLine;
