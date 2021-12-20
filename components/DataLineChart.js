import React from "react";
import {Line} from "react-chartjs-2";

 // function findOcc(arr, key){
  //   let arr2 = [];
      
  //   arr.forEach((x)=>{
  //      if(arr2.some((val)=>{ return val[key] == x[key] })){
  //        arr2.forEach((k)=>{
  //          if(k[key] === x[key]){ 
  //            k["occurrence"]++
  //          }
  //       })
  //      }else{
  //        let a = {}
  //        a[key] = x[key]
  //        a["occurrence"] = 1
  //        arr2.push(a);
  //      }
  //   })
  //   return arr2
  // }

const DataLineChart = ({data}) => {
  const dates = data.map(data => data.date)
  const sortedDates = dates.sort(function(a, b){
    var aa = a.split('/').reverse().join(),
        bb = b.split('/').reverse().join();
    return aa < bb ? -1 : (aa > bb ? 1 : 0);
  })
  
  const counts = {};
  for (const num of sortedDates) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  const chartData = {
    labels: Object.keys(counts),
    datasets: [
      {
        label: "Number of student placed",
        data : Object.values(counts),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
      }
    ],
  };
  return  <Line data={chartData} />;
};

export default DataLineChart;

