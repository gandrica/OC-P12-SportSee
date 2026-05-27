import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

import CustomCursor from "./CustomCursorActivityChart";

import styles from "./ActivityChart.module.scss";
import CustomLegendAverageChart from "./CustomLegendActivityChart";

function ActivityChart({ userActivityData }) {
  const setXTickFormatterAcChart = (value) => {
    let index = 0;
    userActivityData.map((data, i) => {
      if (data["day"] === value) {
        index = i;
        return index;
      }
    });
    return index + 1;
  };

  return (
    <div className={styles.barChart}>
      <BarChart
        className={styles.barChartContainer}
        responsive
        data={userActivityData}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
        barSize={8}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#DEDEDE"
          yAxisId="axePoids"
        />
        <XAxis
          dataKey="day"
          stroke="#9B9EAC"
          tickLine={false}
          tickFormatter={setXTickFormatterAcChart}
          tickMargin={16}
          padding={{ left: -40, right: -40 }}
        />
        <YAxis
          yAxisId="axePoids"
          dataKey="kilogram"
          tickLine={false}
          axisLine={false}
          stroke="#9B9EAC"
          orientation="right"
          tickMargin={20}
          tickCount={3}
          type="number"
          allowDecimals={false}
          allowDataOverflow={true}
          domain={[
            (dataMin) => Math.round(dataMin - 1),
            (dataMax) => Math.round(dataMax),
          ]}
        />
        <YAxis yAxisId="axeCalories" hide={true} />
        <Tooltip
          cursor={<CustomCursor />}
          content={({ active, payload }) => {
            if (!active || !payload || payload.length === 0) {
              return null;
            }
            return (
              <div
                style={{
                  width: "40px",
                  height: "64px",
                  marginLeft: "24px",
                  backgroundColor: "#e60000",
                  display: "flex",
                  color: "white",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  fontWeight: "500",
                  fontSize: "7px",
                }}
              >
                <div>{payload[0].payload["kilogram"]}kg</div>
                <div>{payload[0].payload["calories"]}kcal</div>
              </div>
            );
          }}
        />
        <Legend verticalAlign="top" content={CustomLegendAverageChart} />
        <Bar
          yAxisId="axePoids"
          dataKey="kilogram"
          // stackId={1}
          fill="#282d30"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          yAxisId="axeCalories"
          dataKey="calories"
          fill="#e60000"
          radius={[10, 10, 0, 0]}
          // stackId={2}
        />
        <RechartsDevtools />
      </BarChart>
    </div>
  );
}

export default ActivityChart;
