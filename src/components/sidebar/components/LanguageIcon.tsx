"use client"

// React
import { useContext } from "react"

// Components
import { IconContext } from "../Sidebar"

/**
 * Lanuage Icon in `Sidebar`. Toggles
 * different languages for the application.
 *
 * @returns `LanguageIcon` component
 */
export default function LanguageIcon() {
  const iconStyles = useContext(IconContext)
  return (
    <button className={`${iconStyles} text-xl text-icon-color`}>ENG</button>
  )
}
