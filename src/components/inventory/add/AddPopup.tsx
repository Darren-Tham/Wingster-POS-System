"use client"

// React
import { useContext } from "react"

// Context
import ButtonContext from "../ButtonContext"

/**
 * A popup that displays different
 * actions when the user clicks
 * on the `AddButton` component.
 *
 * @returns `AddPopup` component
 */
export default function AddPopup() {
  const { popupContainerStyles, popupEntryStyles } = useContext(ButtonContext)
  return (
    <div className={`${popupContainerStyles} right-3/4 text-main-blue`}>
      <div className={`${popupEntryStyles} rounded-t-lg`}>Add Product</div>
      <div className={`${popupEntryStyles} rounded-b-lg`}>Add Category</div>
    </div>
  )
}