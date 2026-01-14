"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SalesChart } from "./sales-chart"

export function SalesOverview() {
  const [activePeriod, setActivePeriod] = useState("1 Year")

  const salesData = [
    {
      title: "Total Inflow",
      value: "₦120,000,000.00",
      percentage: "2.5%",
      change: "up" as const,
      valueColor: "text-[#4545FE]",
      changeColor: "text-green-500",
    },
    {
      title: "MRR",
      value: "₦50,000,000.00",
      percentage: "2.5%",
      change: "up" as const,
      valueColor: "text-green-500",
      changeColor: "text-green-500",
    },
    {
      title: "Commission Revenue",
      value: "₦200,000,000.00",
      percentage: "0.5%",
      change: "up" as const,
      valueColor: "text-cyan-500",
      changeColor: "text-green-500",
    },
    {
      title: "GMV",
      value: "₦100,000,000.00",
      percentage: "0.5%",
      change: "down" as const,
      valueColor: "text-red-500",
      changeColor: "text-red-500",
    },
  ];

  const ChangeIndicator = ({ change }: { change: "up" | "down" }) => {
    const isUp = change === "up";
    const iconWrapperClass = isUp
      ? "w-4 h-4 rounded-full bg-green-100 flex items-center justify-center"
      : "w-4 h-4 rounded-full bg-red-100 flex items-center justify-center";
    const pathD = isUp ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7";

    return (
      <div className={iconWrapperClass}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-2.5 w-2.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d={pathD}
          />
        </svg>
      </div>
    );
  };

  const StatCard = ({
    title,
    value,
    percentage,
    change,
    valueColor,
    changeColor,
  }: {
    title: string;
    value: string;
    percentage: string;
    change: 'up' | 'down';
    valueColor: string;
    changeColor: string;
  }) => (
    <div className="bg-white border border-[#E4E4E4] rounded-[12px] p-4">
      <p className={`text-[19px] font-semibold ${valueColor}`}>{value}</p>
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-medium text-[#3D3D3D]">{title}</span>
        <div className={`flex items-center gap-1 ${changeColor}`}>
          <ChangeIndicator change={change} />
          <span className="text-xs font-semibold">{percentage}</span>
        </div>
      </div>
    </div>
  );

  return (
    <Card className="bg-white py-4 gap-4 border border-[#D6D6D6] rounded-2xl shadow-none">
      <CardHeader className="pb-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="text-[20px] text-[#191919] font-bold">Sales Overview</CardTitle>
            <p className="text-regular text-[#606060] text-muted-foreground mt-1">Showing overview Jan 2022 - Sep 2022</p>
          </div>
          <Button variant="outline" className="rounded-[72px] px-6 text-sm bg-transparent whitespace-nowrap">
            View Transactions
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pb-0">
        <div className="flex justify-end gap-2 flex-wrap -mt-4 mb-2">
          {["1 Week", "1 Month", "1 Year"].map((period) => (
            <Button
              key={period}
              variant={activePeriod === period ? "default" : "outline"}
              size="sm"
              className="rounded-lg"
              onClick={() => setActivePeriod(period)}
            >
              {period}
            </Button>
          ))}
        </div>
      </CardContent>
      <div className="h-px bg-[#E4E4E4]" />
      <CardContent>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:items-start">
          <div className="w-full lg:w-[50%] min-w-0">
            <SalesChart />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            {salesData.map((data, index) => (
              <StatCard key={index} {...data} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}