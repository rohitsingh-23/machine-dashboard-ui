import { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import axios from "axios";

export default function Pi() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get("https://machine-dashboard.onrender.com/api/pie-chart")
      .then((res) => {
        //   console.log(res.data);
        setData(res.data);
      });
  };
  return (
    <PieChart
      series={[
        {
          data: data,
        },
      ]}
      colors={["#67C587", "#88D1A1", "#A9DEBA", "#C9EAD4", "#EAF6ED"]}
      width={400}
      height={200}
    />
  );
}
