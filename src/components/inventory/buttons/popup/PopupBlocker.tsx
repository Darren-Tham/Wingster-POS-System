"use client"

// React
import type { Dispatch, SetStateAction } from "react"

/**
 * Props for `PopupBlocker` component.
 */
type Props = {
  showPopup: boolean
  setShowPopup: Dispatch<SetStateAction<boolean>>
}

/**
 * Transparent blocker that covers the
 * whole screen when a popup appears.
 *
 * When the user clicks outside of the popup,
 * this will make the popup close.
 *
 * @param showPopup boolean determining the
 *                     visibility of a popup
 * @param setShowPopup function that sets the
 *                        visibility of a popup
 * @returns `PopupBlocker` component
 */
export default function PopupBlocker({ showPopup, setShowPopup }: Props) {
  return (
    <button
      className={`fixed inset-0 bg-black ${
        showPopup ? "visible opacity-20" : "invisible opacity-0"
      } cursor-default ${showPopup ? "z-10" : ""} transition-all`}
      onClick={() => setShowPopup(false)}
    />
  )
}
