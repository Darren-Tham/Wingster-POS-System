"use client"

// React
import { useContext } from "react"

// Context
import ButtonContext from "../ButtonContext"

// Components
import AddPopup from "./AddPopup"

// Next
import Image from "next/image"

// SVG
import WhitePlus from "@public/white-plus.svg"

/**
 * Button that allows the user to add
 * different objects in the `Inventory`
 * page.
 *
 * @returns `AddButton` component
 */
export default function AddButton() {
  const { circleStyles, imgSize } = useContext(ButtonContext)
  return (
    <button className={`${circleStyles} from-main-light-blue to-main-blue`}>
      <Image
        src={WhitePlus}
        alt="White Plus Icon"
        width={imgSize}
        height={imgSize}
      />
      <AddPopup />
    </button>
  )
}
