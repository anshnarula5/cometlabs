import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

function countInRange(arr, x, y) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= x && arr[i] <= y) count++;
  }
  return count;
}

const PieChart = ({ data }) => {
  const ctc = data.map((data) => data.ctc).sort();

  const ctcs = [
    countInRange(ctc, 0, 10),
    countInRange(ctc, 10, 20),
    countInRange(ctc, 20, 30),
    countInRange(ctc, 30, 40),
    countInRange(ctc, 40, 50),
  ];
  // const max = Math.max(...ctc);
  // const length = ctc.length;
  // for (let i = 0;i < 50; i++){
  //   ctcs.push(countInRange(ctc, length*i/10, length*(i+1)/10))
  // }
  // console.log(ctcs)
  const pieData = {
    labels: [">10L", "10-20 L", "20-30 L", "30-40 L", "40-50"],
    datasets: [
      {
        data: ctcs,
        label: "CTC distribution",
        backgroundColor: Object.values({
          red: "rgb(255, 99, 132)",
          orange: "rgb(255, 159, 64)",
          yellow: "rgb(255, 205, 86)",
          green: "rgb(75, 192, 192)",
          blue: "rgb(54, 162, 235)",
          purple: "rgb(153, 102, 255)",
          grey: "rgb(201, 203, 207)",
        }),
      },
    ],
  };

  return <Pie data={pieData} title="CTC distribution" />;
};

export default PieChart;
