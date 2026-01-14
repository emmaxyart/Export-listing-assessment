"use client"

import React, { useState, useEffect } from "react"
import { ArrowLeft, X } from "lucide-react"
import Image from "next/image"

interface CalendarModalProps {
  isOpen: boolean
  onClose: () => void
  anchorRect?: DOMRect | null
}

export function CalendarModal({ isOpen, onClose, anchorRect }: CalendarModalProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [panelStyle, setPanelStyle] = useState<React.CSSProperties | undefined>(undefined)

  useEffect(() => {
    if (anchorRect) {
      const panelWidthPx = 320
      const viewportWidth = window.innerWidth
      const minLeft = 8
      const maxLeft = Math.max(minLeft, viewportWidth - panelWidthPx - 8)
      const left = Math.min(Math.max(minLeft, Math.round(anchorRect.left) - 80), maxLeft)
      const top = Math.round(anchorRect.bottom) + 8

      setPanelStyle({
        position: "fixed",
        top,
        left,
        zIndex: 1001,
      })
    }
  }, [anchorRect])

  if (!isOpen) return null

  const initialDate = new Date()

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  const days = []
  const startDate = new Date(currentYear, currentMonth, 1)
  startDate.setDate(startDate.getDate() - firstDayOfMonth)

  for (let i = 0; i < 42; i++) {
    const date = new Date(startDate)
    date.setDate(date.getDate() + i)
    days.push(date)
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1))
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      {anchorRect ? (
        <div style={panelStyle} className="bg-[#0D0D0D] w-full max-w-[400px] bg-background-light dark:bg-background-dark text-[#969696] shadow-2xl relative overflow-hidden flex flex-col">
          {/* Header */}
          <header className="px-4 pt-4 pb-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={onClose} className="p-1 hover:bg-slate-100 dark:hover:bg-neutral-800 rounded-full transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-xl font-bold tracking-tight">Calendar</h1>
            </div>

            <button onClick={onClose} className="p-1 hover:bg-slate-100 dark:hover:bg-neutral-800 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </header>

          {/* Month navigation */}
          <div className="mt-8 mb-6 flex items-center justify-center gap-12">
            <button onClick={handlePrevMonth} className="text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
              <Image src="/arrow-left.svg" alt="Previous Month" width={24} height={24} />
            </button>

            <h2 className="text-xl font-bold">
              {monthNames[currentMonth]} {currentYear}
            </h2>

            <button onClick={handleNextMonth} className="text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
              <Image src="/arrow-right.svg" alt="Next Month" width={24} height={24} />
            </button>
          </div>

          {/* Calendar grid */}
          <div className="px-4 flex-1">
            <div className="grid grid-cols-7 w-full border-t border-l calendar-border">
              {/* Weekdays */}
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="calendar-border border-b border-r py-1 flex items-center justify-center"
                >
                  <span className="text-[10px] font-bold text-slate-400 dark:text-neutral-500 tracking-wider">
                    {day}
                  </span>
                </div>
              ))}

              {/* Dates */}
              {days.map((day, index) => {
                const isCurrentMonth = day.getMonth() === currentMonth
                const isSelected =
                  day.getDate() === initialDate.getDate() &&
                  day.getMonth() === initialDate.getMonth() &&
                  day.getFullYear() === initialDate.getFullYear()

                let dateText: React.ReactNode = day.getDate()
                if (day.getDate() === 1 && !isCurrentMonth) {
                  dateText = (
                    <span className="text-xs">
                      {monthNames[day.getMonth()].slice(0, 3).toUpperCase()} {day.getDate()}
                    </span>
                  )
                }

                return (
                  <div
                    key={index}
                    className={`calendar-border border-b border-r aspect-[3/5] p-2 text-xs ${
                      !isCurrentMonth
                        ? "text-slate-400 dark:text-neutral-600"
                        : ""
                    }`}
                  >
                    {isSelected ? (
                      <div className="bg-[#2525E6] text-white font-bold w-10 h-5 rounded-full flex items-center justify-center mt-1">
                        {day.getDate()}
                      </div>
                    ) : (
                      dateText
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Bottom indicator */}
          <div className="flex justify-center pt-2">
            <div className="w-32 h-1 bg-slate-300 dark:bg-neutral-800 rounded-full" />
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="dark w-full max-w-[400px] h-[844px] bg-background-light dark:bg-background-dark text-[#969696] shadow-2xl relative overflow-hidden flex flex-col">
            {/* Header */}
            <header className="px-4 pt-4 pb-2 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button onClick={onClose} className="p-1 hover:bg-slate-100 dark:hover:bg-neutral-800 rounded-full transition-colors">
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <h1 className="text-xl font-bold tracking-tight">Calendar</h1>
              </div>

              <button onClick={onClose} className="p-1 hover:bg-slate-100 dark:hover:bg-neutral-800 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </header>

            {/* Month navigation */}
            <div className="mt-8 mb-6 flex items-center justify-center gap-12">
              <button onClick={handlePrevMonth} className="text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
                <Image src="/arrow-left.svg" alt="Previous Month" width={24} height={24} />
              </button>

              <h2 className="text-xl font-bold">
                {monthNames[currentMonth]} {currentYear}
              </h2>

              <button onClick={handleNextMonth} className="text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
                <Image src="/arrow-right.svg" alt="Next Month" width={24} height={24} />
              </button>
            </div>

            {/* Calendar grid */}
            <div className="px-4 flex-1">
              <div className="grid grid-cols-7 w-full border-t border-l calendar-border">
                {/* Weekdays */}
                {dayNames.map((day) => (
                  <div
                    key={day}
                    className="calendar-border border-b border-r py-1 flex items-center justify-center"
                  >
                    <span className="text-[10px] font-bold text-slate-400 dark:text-neutral-500 tracking-wider">
                      {day}
                    </span>
                  </div>
                ))}

                {/* Dates */}
                {days.map((day, index) => {
                  const isCurrentMonth = day.getMonth() === currentMonth
                  const isSelected =
                    day.getDate() === initialDate.getDate() &&
                    day.getMonth() === initialDate.getMonth() &&
                    day.getFullYear() === initialDate.getFullYear()

                  let dateText: React.ReactNode = day.getDate()
                  if (day.getDate() === 1 && !isCurrentMonth) {
                    dateText = (
                      <span className="text-xs">
                        {monthNames[day.getMonth()].slice(0, 3).toUpperCase()} {day.getDate()}
                      </span>
                    )
                  }

                  return (
                    <div
                      key={index}
                      className={`calendar-border border-b border-r aspect-[3/5] p-2 text-xs ${
                        !isCurrentMonth
                          ? "text-slate-400 dark:text-neutral-600"
                          : ""
                      }`}
                    >
                      {isSelected ? (
                        <div className="bg-blue-600 text-white font-bold w-10 h-5 rounded-full flex items-center justify-center mt-1">
                          {day.getDate()}
                        </div>
                      ) : (
                        dateText
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Bottom indicator */}
            <div className="flex justify-center pt-2">
              <div className="w-32 h-1 bg-slate-300 dark:bg-neutral-800 rounded-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}