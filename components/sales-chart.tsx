"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const chartData = [
  { month: "Jan", value1: 35, value2: 25, value3: 15 },
  { month: "Feb", value1: 28, value2: 22, value3: 18 },
  { month: "Mar", value1: 32, value2: 28, value3: 12 },
  { month: "Apr", value1: 40, value2: 35, value3: 20 },
  { month: "May", value1: 38, value2: 32, value3: 25 },
  { month: "Jun", value1: 45, value2: 40, value3: 28 },
  { month: "Jul", value1: 48, value2: 42, value3: 30 },
  { month: "Aug", value1: 42, value2: 38, value3: 22 },
  { month: "Sep", value1: 35, value2: 30, value3: 18 },
]

export function SalesChart() {
  return (
    <ResponsiveContainer width="100%" height={200} minHeight={200}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value1" fill="#1a5a5a" />
        <Bar dataKey="value2" fill="#3b82f6" />
        <Bar dataKey="value3" fill="#ef4444" />
      </BarChart>
    </ResponsiveContainer>
  )
}