"use client"

import Image from "next/image"
import Link from "next/link"
import WingsterLogo from "@public/sidebar/wingster-logo.png"
import HouseGray from "@public/sidebar/house-gray-icon.svg"
import HouseBlue from "@public/sidebar/house-blue-icon.svg"
import OrderGray from "@public/sidebar/order-gray-icon.svg"
import OrderBlue from "@public/sidebar/order-blue-icon.svg"
import TenderGray from "@public/sidebar/tender-gray-icon.svg"
import TenderBlue from "@public/sidebar/tender-blue-icon.svg"
import CashRegister from "@public/sidebar/cash-register-icon.svg"
import Logout from "@public/sidebar/logout-icon.svg"

/**
 * Props for the `Sidebar` component.
 */
type Props = {
  currentIcon?: Icons
}

export const enum Icons {
  House,
  Order,
  Tender
}

export default function Sidebar({ currentIcon }: Readonly<Props>) {
  const iconStyles =
    "w-full aspect-square flex justify-center items-center mx-8 hover:bg-neutral-100 relative transition-colors duration-300"
  const selectionBar = (
    <div className="absolute right-0 w-1 h-full bg-main-blue rounded-full" />
  )
  return (
    <aside className="flex flex-col justify-between items-center w-max h-screen">
      <div className="flex flex-col items-center">
        <Image
          className="my-8"
          src={WingsterLogo}
          alt="Wingster Logo"
          width={70}
          priority={true}
          unoptimized
        />
        <Link href="/" className={iconStyles}>
          <Image
            src={currentIcon === Icons.House ? HouseBlue : HouseGray}
            alt="House Icon"
          />
          {currentIcon === Icons.House && selectionBar}
        </Link>
        <Link href="/" className={iconStyles}>
          <Image
            src={currentIcon === Icons.Order ? OrderBlue : OrderGray}
            alt="Order Icon"
          />
          {currentIcon === Icons.Order && selectionBar}
        </Link>
        <Link href="/" className={iconStyles}>
          <Image
            src={currentIcon === Icons.Tender ? TenderBlue : TenderGray}
            alt="Tender Icon"
          />
          {currentIcon === Icons.Tender && selectionBar}
        </Link>
        <button className={iconStyles}>
          <Image src={CashRegister} alt="Cash Register Icon" />
        </button>
        <button className={`${iconStyles} text-xl text-icon-color`}>ENG</button>
      </div>
      <button className={iconStyles}>
        <Image src={Logout} alt="Logout Icon" />
      </button>
    </aside>
  )
}
