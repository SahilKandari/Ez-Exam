import React, { useState } from "react";
import Polarchart from "./components/Polarchart";
import Piechart from "./components/Piechart";
import "./Total.css";

function Total() {
  const [polarchartData, setPolarchartData] = useState({
    labels: ["My Score", "Average Score", "Highest Score", "Maximum Score"],
    datasets: [
      {
        label: "Total Score Comparison with Average and Highest",
        data: [145, 190, 285, 360],
        backgroundColor: ["#66C9C9", "#FFD164", "#6492D7", "#FF6F8D"],
      },
    ],
  });
  const [pieChartData, setPieChart] = useState({
    labels: ["Correct", "Incorrect", "Not Attempted"],
    datasets: [
      {
        label: "Overall Response Accuracy of 90 Questions",
        data: [14, 14, 22],
        fill: true,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  });

  return (
    <div className="row total-section">
      <div className="col-5 charts">
        <div className="row">
          <Polarchart chartData={polarchartData} />
        </div>
        <div className="row  ">
          Total Score Comparison with Average and Highest
        </div>
      </div>
      <div className="col-5 charts">
        <div className="row">
          {" "}
          <Piechart chartData={pieChartData} />
        </div>
        <div className="row">Overall Response Accuracy of 90 Questions</div>
      </div>
    </div>
  );
}

export default Total;
