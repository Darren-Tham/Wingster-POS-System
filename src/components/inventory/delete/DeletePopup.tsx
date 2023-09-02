"use client"

// React
import { useContext } from "react"

// Context
import ButtonContext from "../ButtonContext"

/**
 * A popup that displays different
 * actions when the user clicks
 * on the `DeleteButton` component.
 *
 * @returns `DeletePopup` component
 */
export default function DeletePopup() {
  const { popupContainerStyles, popupEntryStyles } = useContext(ButtonContext)
  return (
    <div className={`${popupContainerStyles} left-3/4 text-red-500`}>
      <div className={`${popupEntryStyles} rounded-t-lg`}>Delete Product</div>
      <div className={`${popupEntryStyles} rounded-b-lg`}>Delete Category</div>
    </div>
  )
}