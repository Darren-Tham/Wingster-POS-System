// SVG
import WhitePlus from "@public/white-plus.svg"
import Button from "./Button"

/**
 * Button that allows the user to add
 * different objects in the `Inventory`
 * page.
 *
 * @returns `AddButton` component
 */
export default function AddButton() {
  const popupButtons = [
    {
      name: "Add Product",
      onClick: () => {}
    },
    {
      name: "Add Category",
      onClick: () => {}
    }
  ]

  return (
    <Button
      src={WhitePlus}
      alt="White Plus Icon"
      popupButtons={popupButtons}
      gradientColors="from-main-light-blue to-main-blue"
      textColor="text-main-blue"
      horizontalDirection="left"
    />
  )
}
