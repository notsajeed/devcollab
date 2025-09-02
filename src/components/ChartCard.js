"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", value: 3 },
  { day: "Tue", value: 5 },
  { day: "Wed", value: 2 },
  { day: "Thu", value: 6 },
  { day: "Fri", value: 4 },
  { day: "Sat", value: 7 },
  { day: "Sun", value: 5 },
];

export function ChartCard({ title }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/8 transition-all duration-300">
      <h3 className="text-lg font-medium text-white/90 mb-6 tracking-tight">
        {title}
      </h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <CartesianGrid 
              stroke="rgba(255, 255, 255, 0.1)" 
              strokeDasharray="2 4" 
              vertical={false}
            />
            <XAxis 
              dataKey="day" 
              stroke="rgba(255, 255, 255, 0.6)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis 
              stroke="rgba(255, 255, 255, 0.6)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              dx={-10}
            />
            <Tooltip
              contentStyle={{ 
                backgroundColor: "rgba(0, 0, 0, 0.9)", 
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "8px",
                backdropFilter: "blur(12px)"
              }}
              labelStyle={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "12px" }}
              itemStyle={{ color: "#60A5FA", fontSize: "12px", fontWeight: "500" }}
              cursor={{ stroke: "rgba(255, 255, 255, 0.1)", strokeWidth: 1 }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#60A5FA"
              strokeWidth={2.5}
              dot={{ 
                r: 0,
                fill: "#60A5FA",
                strokeWidth: 0
              }}
              activeDot={{ 
                r: 6, 
                fill: "#60A5FA", 
                strokeWidth: 2,
                stroke: "rgba(96, 165, 250, 0.3)"
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}