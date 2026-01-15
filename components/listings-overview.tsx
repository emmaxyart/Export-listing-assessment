"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight, Home } from "lucide-react";
import Image from "next/image";

export function ListingsOverview() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#D6D6D6] bg-transparent shadow-none dark:border-gray-800 gap-0">
      <div className="flex flex-row items-center justify-between px-6 pt-4">
        <div className="flex items-center gap-2">
          <div className="text-primary">
            <Image src="/home-linear.svg" alt="Logo" width={24} height={24} />
          </div>
          <p className="text-sm bg-transparent font-semibold text-primary dark:text-gray-100">
            Listings Overview
          </p>
        </div>

        <a
          href="#"
          className="flex items-center gap-1 text-sm font-medium text-[#4545FE] transition-opacity hover:opacity-80"
        >
          View all
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-b-2xl">
        <div className="h-px bg-gray-100 dark:bg-gray-800 mt-4" />

        <div className="px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#525252] dark:text-gray-400">
                Total
              </p>
              <p className="text-[24px] font-semibold text-[#141414] mt-3 dark:text-white">
                1.8k
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-[#525252] dark:text-gray-400">
                Active
              </p>
              <p className="text-[24px] font-semibold text-[#141414] mt-3 dark:text-white">
                80
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-[#525252] dark:text-gray-400">
                Archived
              </p>
              <p className="text-[24px] font-semibold text-[#141414] mt-3 dark:text-white">
                1k
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}