"use client"

// React
import { useContext } from "react"

// Context
import ButtonContext from "./ButtonContext"

// SVG
import WhiteCross from "@public/white-cross.svg"

// Next
import Image from "next/image"

/**
 * Button that allows the user to delete
 * different objects in the `Inventory`
 * page.
 *
 * @returns `DeleteButton` component
 */
export default function DeleteButton() {
  const { buttonStyles, imgSize } = useContext(ButtonContext)
  return (
    <button className={`${buttonStyles} from-red-400 to-red-500`}>
      <Image
        src={WhiteCross}
        alt="White Cross Icon"
        width={imgSize}
        height={imgSize}
      />
    </button>
  )
}
