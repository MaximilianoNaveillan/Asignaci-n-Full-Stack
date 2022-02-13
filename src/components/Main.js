import React, { useState, useEffect } from "react";
import Table from "./Table";
import Chart from "./Chart";
import "../css/Main.css";

export default function Main({ data }) {
  const [year, setYear] = useState("2019");
  const [rows, setRows] = useState([]);

  const years = ["2014", "2015", "2016", "2017", "2018", "2019"];

  const onChange = (e) => {
    setYear(e.target.value);
  };

  const searchData = (year) => {
    var newrows = data.rows.filter((item) => {
      if (item.year.toString().toLowerCase().includes(year.toLowerCase())) {
        return item;
      }
    });
    setRows(newrows);
  };

  useEffect(() => {
    // other code
    searchData(year);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year]);

  return (
    <div>
      <div>
        <div className="container1">
          <div className="card">
            <div className="box-select">
              <select value={year} onChange={onChange}>
                {years.map((item, i) => (
                  <option value={item} key={i}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="card">
            <div className="hack1">
              <div className="hack2">
                {rows.length > 0 && <Chart rows={rows} cols={data.cols} />}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container2">
        <div className="hack1">
          <div className="hack2">
            <Table rows={rows} cols={data.cols} />
          </div>
        </div>
      </div>
    </div>
  );
}
