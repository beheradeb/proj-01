import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useState } from "react";
import { UserData } from "./Data";

function LineChart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["black"],
      },
    ],
  });
  //   return <Line data={userData} />;
  return (
    <div style={{ width: "50vw", background: "white", padding: "20px" }}>
      <Line data={userData} />
    </div>
  );
}

export default LineChart;
/*
// import { Chart as ChartJS } from "chart.js/auto";
const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
*/
