// LA LIBRERIA REQUIERE CHART DEFINIDA
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function Chart({ cols, rows, chart }) {
  const data = {
    labels: cols.slice(3),
    datasets: [
      {
        label: "First dataset",
        borderColor: "black",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(0,225,0,0.2)",
        hoverBorderColor: "#ffff00",
        data: Object.values(rows[0]).slice(3),
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
}
