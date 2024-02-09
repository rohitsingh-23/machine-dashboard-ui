import axios from "axios";
import React, { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  const [head, setHead] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get("https://machine-dashboard.onrender.com/api/table")
      .then((res) => {
        console.log(res.data);
        const keysArray = Object.keys(res.data[0]);
        setHead(keysArray);
        setData(res.data);
      });
  };
  return (
    <div>
      <table className="border-collapse bg-white rounded-lg shadow-md h-[30vh] w-[60vw]">
        <thead>
          <tr className="border rounded-lg">
            {head.map((item) => {
              return (
                <td className="border text-left font-[700] px-[10px] py-[10px]">
                  {item}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr className="border rounded-lg">
                <td className="border px-[10px] w-[50px] text-left">
                  {item.id}
                </td>
                <td className="border px-[10px] w-[120px] text-left">
                  {" "}
                  {item.name}
                </td>
                <td className="border px-[10px] w-[120px] text-left">
                  {item.quantity}
                </td>
                <td className="border px-[10px] w-[120px] text-left">
                  {item.price}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
