import React from "react";
import { Bar } from "react-chartjs-2";

function countInRange(arr, x, y) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= x && arr[i] <= y) count++;
  }
  return count;
}

const DataBar = ({ data }) => {
  const grades = data.map((data) => data.grade).sort();
  const numGrades = [
    countInRange(grades, 6, 7),
    countInRange(grades, 7, 8),
    countInRange(grades, 8, 9),
    countInRange(grades, 9, 10),
    ];
    
  const barData = {
    labels: ["6-7", "7-8", "8-9", "9-10"],
    datasets: [
      {
        label: "No. of students placed w.r.t grades",
        backgroundColor: "rgba(75,192,192,1)",
        data: numGrades,
      },
    ],
  };
  return <Bar data={barData} />;
};

export default DataBar;
