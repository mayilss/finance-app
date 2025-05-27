import React from "react";
import {
  Area,
  CartesianGrid,
  AreaChart as RechartAreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { CategoricalChartProps } from "recharts/types/chart/generateCategoricalChart";

function AreaChart(props: CategoricalChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%" aspect={16 / 9}>
      <RechartAreaChart
        width={500}
        height={400}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
        {...props}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </RechartAreaChart>
    </ResponsiveContainer>
  );
}

export default React.memo(AreaChart);
