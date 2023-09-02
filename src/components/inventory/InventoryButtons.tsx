"use client"

// React
import { useMemo } from "react"

// Context
import ButtonContext from "./ButtonContext"

// Components
import AddButton from "./add/AddButton"
import DeleteButton from "./delete/DeleteButton"

/**
 * Buttons that have different actions
 * for the user to do in the `Inventory`
 * page.
 *
 * @returns `InventoryButtons` component
 */
export default function InventoryButtons() {
  const buttonContextValue = useMemo(
    () => ({
      circleStyles:
        "bg-gradient-to-br rounded-full p-2 drop-shadow-md hover:opacity-95 relative",
      imgSize: 50,
      popupContainerStyles: "absolute bg-white bottom-3/4 rounded-lg",
      popupEntryStyles: "w-64 p-2 hover:bg-neutral-100"
    }),
    []
  )

  return (
    <div className="flex justify-between">
      <ButtonContext.Provider value={buttonContextValue}>
        <DeleteButton />
        <AddButton />
      </ButtonContext.Provider>
    </div>
  )
}
