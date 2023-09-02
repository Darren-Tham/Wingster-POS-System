"use client"

// React
import { useMemo } from "react"

// Context
import ButtonContext from "./ButtonContext"

// Components
import AddButton from "./AddButton"
import DeleteButton from "./DeleteButton"

/**
 * Buttons that have different actions
 * for the user to do in the `Inventory`
 * page.
 *
 * @returns `InventoryButtons` component
 */
export default function InventoryButtons() {
  const buttonStyles = "bg-gradient-to-br rounded-full p-2 drop-shadow-md hover:opacity-95"
  const imgSize = 50
  const buttonContextValue = useMemo(() => ({ buttonStyles, imgSize }), [])

  return (
    <div className="flex justify-between">
      <ButtonContext.Provider value={buttonContextValue}>
        <DeleteButton />
        <AddButton />
      </ButtonContext.Provider>
    </div>
  )
}
