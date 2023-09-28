"use client"

// SVG
import WhitePlus from "@public/white-plus.svg"
import InventoryButton from "../button/InventoryButton"
import AddCategoryPopup from "./components/category-popup/AddCategoryPopup"

// React
import { useState } from "react"
import AddProductPopup from "./components/product-popup/AddProductPopup"

/**
 * Button that allows the user to add
 * different objects in the `Inventory`
 * page.
 *
 * @returns `AddButton` component
 */
export default function AddButton() {
  const [showCategoryPopup, setShowCategoryPopup] = useState(false)
  const [showAddActionsPopup, setShowAddActionsPopup] = useState(false)
  const [showProductPopup, setShowProductPopup] = useState(false)


  const popupButtons = [
    {
      name: "Add Product",
      onClick: () => {
        setShowProductPopup(true)
        setShowAddActionsPopup(false)
      }
    },
    {
      name: "Add Category",
      onClick: () => {
        setShowCategoryPopup(true)
        setShowAddActionsPopup(false)
      }
    }
  ]

  return (
    <>
      <InventoryButton
        src={WhitePlus}
        alt="White Plus Icon"
        popupButtons={popupButtons}
        gradientColors="from-main-light-blue to-main-blue"
        textColor="text-main-blue"
        horizontalDirection="left"
        showActionsPopup={showAddActionsPopup}
        setShowActionPopup={setShowAddActionsPopup}
      />
      <AddCategoryPopup
        showCategoryPopup={showCategoryPopup}
        setShowCategoryPopup={setShowCategoryPopup}
      />
      <AddProductPopup
        showProductPopup={showProductPopup}
        setShowProductPopup={setShowProductPopup}
      />
    </>
  )
}
