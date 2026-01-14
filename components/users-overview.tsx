"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight, Users } from "lucide-react";
import Image from "next/image"

export function UsersOverview() {
  return (
    <Card className="w-full overflow-hidden rounded-2xl border border-[#D6D6D6] bg-white shadow-none dark:border-gray-800 dark:bg-gray-900 gap-0">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-primary">
            <Image src="/user.svg" alt="Logo" width={24} height={24} />
          </div>
          <CardTitle className="text-sm bg-transparent font-semibold text-primary dark:text-gray-100">
            Users Overview
          </CardTitle>
        </div>

        <a
          href="#"
          className="flex items-center gap-1 text-sm font-medium text-[#4545FE] transition-opacity hover:opacity-80"
        >
          View all
          <ChevronRight className="h-4 w-4" />
        </a>
      </CardHeader>

      <div className="h-px bg-gray-100 dark:bg-gray-800 mt-4" />

      <CardContent className="p-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Total
            </p>
            <p className="text-xl font-bold text-gray-900 mt-4 dark:text-white">
              20.7k
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Riders
            </p>
            <p className="text-xl font-bold text-gray-900 mt-4 dark:text-white">
              8.5k
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Subscribers
            </p>
            <p className="text-xl font-bold text-gray-900 mt-4 dark:text-white">
              7.5k
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}