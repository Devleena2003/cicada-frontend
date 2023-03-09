import React from "react";
import "./App.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Chart,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
function App() {
  const users = [
    {
      name: "xyz",

      score: 70,
    },
    {
      name: "abc",

      score: 80,
    },
    {
      name: "ijk",

      score: 60,
    },
    {
      name: "pqr",

      score: 40,
    },
    {
      name: "efg",

      score: 20,
    },
  ];
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
      responsive: true,
    },
    plugins: {
      legend: {
        position: "right",
      },
    },
  };
  return (
    <div className="App">
      <div className="scoreboard-img"></div>
      <div className="score-inner">
        <h1 className="Scoreboard">Scoreboard</h1>
        <Bar
          style={{ margin: "5em", width: "50vw" }}
          options={options}
          data={{
            labels: users.map((user) => user.name),
            datasets: [
              {
                label: "Score",
                data: users.map((user) => user.score),
                backgroundColor: "rgb(192, 255, 114)",
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default App;
