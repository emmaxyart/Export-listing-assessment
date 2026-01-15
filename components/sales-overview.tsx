"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SalesChart } from "./sales-chart"
import { ArrowUp, ArrowDown } from "lucide-react"

type StatCardProps = {
  title: string
  value: string
  percentage: string
  change: "up" | "down"
  valueColor: string
  changeColor: string
  icon?: string
};

const salesData: StatCardProps[] = [
  {
    title: "Total Inflow",
    value: "₦120,000,000.00",
    percentage: "2.5%",
    change: "up",
    valueColor: "text-[#4545FE]",
    changeColor: "text-[#12B76A]",
    icon: "/rate-1.svg",
  },
  {
    title: "MRR",
    value: "₦50,000,000.00",
    percentage: "2.5%",
    change: "up",
    valueColor: "text-[#12B76A]",
    changeColor: "text-[#12B76A]",
    icon: "/rate-1.svg",
  },
  {
    title: "Commission Revenue",
    value: "₦200,000,000.00",
    percentage: "0.5%",
    change: "up",
    valueColor: "text-[#14B8A6]",
    changeColor: "text-[#14B8A6]",
    icon: "/rate-2.svg",
  },
  {
    title: "GMV",
    value: "₦100,000,000.00",
    percentage: "0.5%",
    change: "down",
    valueColor: "text-[#F04438]",
    changeColor: "text-[#F04438]",
    icon: "/rate-3.svg",
  },
]

const ChangeIndicator = ({
  change,
  icon,
}: {
  change: "up" | "down";
  icon?: string;
}) => {
  if (icon) {
    return <Image src={icon} alt="icon" width={16} height={16} />;
  }
  const isUp = change === "up";
  const Icon = isUp ? ArrowUp : ArrowDown;
  const iconWrapperClass = isUp
    ? "w-4 h-4 rounded-full bg-green-100 flex items-center justify-center"
    : "w-4 h-4 rounded-full bg-red-100 flex items-center justify-center";

  return (
    <div className={iconWrapperClass}>
      <Icon className="h-2.5 w-2.5" />
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
  icon,
}: StatCardProps) => (
  <div className="bg-white border border-[#E4E4E4] rounded-[12px] p-3">
    <p className={`text-[19px] font-semibold ${valueColor}`}>{value}</p>
    <div className="flex items-center gap-2 mt-1">
      <span className="text-[10px] font-medium text-[#3D3D3D]">{title}</span>
      <div className={`flex items-center gap-1 ${changeColor}`}>
        <ChangeIndicator change={change} icon={icon} />
        <span className="text-[10px] font-regular">{percentage}</span>
      </div>
    </div>
  </div>
)

export function SalesOverview() {
  const [activePeriod, setActivePeriod] = useState("1 Year")

  return (
    <Card className="bg-white py-4 gap-4 border border-[#D6D6D6] rounded-2xl shadow-none">
      <CardHeader className="pb-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="text-[20px] text-[#191919] font-bold">
              Sales Overview
            </CardTitle>
            <p className="text-regular text-[#606060] text-[12px] mt-1">
              Showing overview Jan 2022 - Sep 2022
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-[72px] px-6 text-sm bg-transparent whitespace-nowrap shadow-none border border-[#D6D6D6]"
          >
            View Transactions
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pb-0">
        <div className="flex justify-end text-[14px] font-regular text-[#3D3D3D] gap-2 flex-wrap -mt-4 mb-2">
          {["1 Week", "1 Month", "1 Year"].map(period => (
            <Button
              key={period}
              variant={activePeriod === period ? "default" : "outline"}
              size="sm"
              className="rounded-lg shadow-none"
              onClick={() => setActivePeriod(period)}
            >
              {period}
            </Button>
          ))}
        </div>
      </CardContent>
      <div className="h-px bg-[#E4E4E4]" />
      <CardContent>
        <div className="flex flex-col items-center md:flex-row gap-4  md:items-start">
          <div className="hidden md:flex items-center justify-center self-center pb-9 mr-[-20px]">
            <Image
              src="/left-select.svg"
              alt="Left select icon"
              width={13.5}
              height={13.5}
            />
          </div>
          <div className="w-full md:w-[50%] min-w-0">
            <SalesChart />
          </div>
          <div className="hidden md:flex items-center justify-center self-center pb-12 ">
            <Image
              src="/right-select.svg"
              alt="Right select icon"
              width={13.5}
              height={13.5}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 w-full">
            {salesData.map((data, index) => (
              <StatCard key={index} {...data} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}