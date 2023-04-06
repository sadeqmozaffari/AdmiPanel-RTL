import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];
const SLineChart = ({ width, height }) => {
  return (
    <ComposedChart
      width={width}
      height={height}
      data={data}
      margin={{
        top: 30,
        right: 0,
        bottom: 20,
        left: 0,
      }}
    >
      <CartesianGrid stroke="text-3xl text-gray-700 font-semibold dark:text-gray-50 text-center" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      <Scatter dataKey="cnt" fill="red" />
    </ComposedChart>
  );
};

export default SLineChart;
