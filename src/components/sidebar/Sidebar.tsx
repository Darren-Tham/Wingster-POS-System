"use client"

// React
import { createContext } from "react"

// Components
import WingsterLogo from "./components/WingsterLogo"
import HouseIcon from "./components/HouseIcon"
import OrderIcon from "./components/OrderIcon"
import TenderIcon from "./components/TenderIcon"
import CashRegisterIcon from "./components/CashRegisterIcon"
import LanguageIcon from "./components/LanguageIcon"
import LogoutIcon from "./components/LogoutIcon"

// Enums
import { SelectedIcons } from "@/lib/Enums"

/**
 * Props for the `Sidebar` component.
 */
type Props = {
  currentIcon?: SelectedIcons
}

/**
 * Context that contains the styles for
 * the icon in `Sidebar`.
 */
export const IconContext = createContext("")

/**
 * Sidebar that links to different pages
 * and events of the application.
 *
 * @param currentIcon current icon being selected
 * @returns `Sidebar` component
 */
export default function Sidebar({ currentIcon }: Props) {
  const iconStyles =
    "w-full aspect-square flex justify-center items-center mx-8 hover:bg-neutral-100 relative transition-colors duration-300"
  return (
    <aside className="flex flex-col justify-between items-center w-max h-screen">
      <IconContext.Provider value={iconStyles}>
        <div className="flex flex-col items-center">
          <WingsterLogo />
          <HouseIcon isSelected={SelectedIcons.House === currentIcon} />
          <OrderIcon isSelected={SelectedIcons.Order === currentIcon} />
          <TenderIcon isSelected={SelectedIcons.Order === currentIcon} />
          <CashRegisterIcon />
          <LanguageIcon />
        </div>
        <LogoutIcon />
      </IconContext.Provider>
    </aside>
  )
}
