"use client"

import moment from "moment"
import { useEffect, useState } from "react"
import Link from "next/link"
import Sidebar, { Icons } from "@/components/Sidebar"

export default function Home() {
  const [{ weekDay, date, time }, setDate] = useState(currentDate())

  useEffect(() => {
    const interval = setInterval(() => setDate(currentDate()), 500)
    return () => clearInterval(interval)
  })

  const cellStyles =
    "text-[2vw] rounded-xl shadow-md p-6 w-full h-full flex justify-center items-center text-center"
  const headerCellStyles = `${cellStyles} bg-gradient-to-br from-main-light-blue to-main-blue text-white select-none cursor-default`
  const linkCellStyles = `${cellStyles} bg-white transition-transform hover:scale-105 duration-300`

  return (
    <div className="flex">
      <Sidebar currentIcon={Icons.House} />
      <main className="main gap-10">
        <header className="flex justify-between">
          <div>
            <h1 className="text-[min(3rem,6vw)] mb-2">안녕하세요!</h1>
            <h2 className="text-[min(1.5rem,3vw)] text-main-blue inline mr-2">Wingster</h2>
            <h2 className="text-[min(1.5rem,3vw)] inline">Wings & K-Food</h2>
          </div>
          <time className="flex flex-col gap-2 text-[min(1.5rem,3vw)] items-end">
            <span className="text-main-blue" suppressHydrationWarning>
              {weekDay}
            </span>
            <span suppressHydrationWarning>{date}</span>
            <span className="text-main-blue" suppressHydrationWarning>
              {time}
            </span>
          </time>
        </header>
        <section className="grid grid-rows-4 grid-cols-4 grow gap-4 place-items-center">
          <div className={headerCellStyles}>Orders</div>
          <div className={headerCellStyles}>Payments</div>
          <div className={headerCellStyles}>History</div>
          <div className={headerCellStyles}>Settings</div>
          <Link href="/" className={linkCellStyles}>
            Quick Order
          </Link>
          <Link href="/" className={linkCellStyles}>
            Tender
          </Link>
          <Link href="/" className={linkCellStyles}>
            Order History
          </Link>
          <Link href="/inventory" className={linkCellStyles}>
            Inventory Settings
          </Link>
          <Link href="/" className={linkCellStyles}>
            Cosmic Order
          </Link>
          <Link href="/" className={linkCellStyles}>
            Pay Out
          </Link>
          <Link href="/" className={linkCellStyles}>
            System History
          </Link>
          <Link href="/" className={linkCellStyles}>
            User Settings
          </Link>
          <Link href="/" className={linkCellStyles}>
            Catering + Schedule
          </Link>
          <Link href="/" className={linkCellStyles}>
            Open Cash Drawer
          </Link>
          <Link href="/" className={linkCellStyles}>
            Trends
          </Link>
          <Link href="/" className={linkCellStyles}>
            Time Card
          </Link>
        </section>
      </main>
    </div>
  )
}

/**
 * @returns the weekday, date, and time of today
 */
function currentDate() {
  return {
    weekDay: moment().format("dddd"),
    date: moment().format("MMMM Do, YYYY"),
    time: moment().format("h:mm:ss A")
  }
}
