// SVG
import WhiteCross from "@public/white-cross.svg"

// Next
import InventoryButton from "../button/InventoryButton"

/**
 * Button that allows the user to delete
 * different objects in the `Inventory`
 * page.
 *
 * @returns `DeleteButton` component
 */
export default function DeleteButton() {
  const popupButtons = [
    {
      name: "Delete Product",
      onClick: () => {}
    },
    {
      name: "Delete Category",
      onClick: () => {}
    }
  ]

  return (
    <InventoryButton
      src={WhiteCross}
      alt="White Cross Icon"
      popupButtons={popupButtons}
      gradientColors="from-red-400 to-red-500"
      textColor="text-red-500"
      horizontalDirection="right"
    />
  )
}
