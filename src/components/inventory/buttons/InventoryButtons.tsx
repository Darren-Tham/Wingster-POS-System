"use client"

// Components
import AddButton from "./components/add/AddButton"
import DeleteButton from "./components/delete/DeleteButton"

/**
 * Buttons that have different actions
 * for the user to do in the `Inventory`
 * page.
 *
 * @returns `InventoryButtons` component
 */
export default function InventoryButtons() {
  return (
    <div className="flex justify-between">
      <DeleteButton />
      <AddButton />
    </div>
  )
}
