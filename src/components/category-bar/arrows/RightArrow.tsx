"use client"

// React
import { useContext } from "react"

// Context
import ArrowContext from "./ArrowContext"

// SVG
import RightArrowSVG from "@public/arrow-right.svg"

// Next
import Image from "next/image"

/**
 * Button that scrolls the `CategoryBar`
 * to the right.
 *
 * @returns `RightArrow` component
 */
export default function RightArrow() {
  const arrowStyles = useContext(ArrowContext)
  return (
    <button className={`${arrowStyles} rounded-tr-xl rounded-br-xl`}>
      <Image src={RightArrowSVG} alt="Right Arrow" />
    </button>
  )
}
