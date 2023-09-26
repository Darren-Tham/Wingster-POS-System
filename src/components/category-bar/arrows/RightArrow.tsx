"use client"

// React
import { useContext } from "react"

// SVG
import RightArrowSVG from "@public/arrow-right.svg"

// Next
import Image from "next/image"

// Components
import { ArrowContext } from "../CategoryBar"

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
