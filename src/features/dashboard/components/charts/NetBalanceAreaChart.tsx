import { useAppSelector } from "@app/hooks";
import { selectNetBalanceChartData } from "@features/transactions/selectors";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function NetBalanceArea() {
  const data = useAppSelector(selectNetBalanceChartData);

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      aspect={16 / 9}
      data-testId="chart"
    >
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
