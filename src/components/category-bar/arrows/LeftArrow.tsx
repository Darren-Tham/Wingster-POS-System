"use client"

// React
import { useContext } from "react"

// SVG
import LeftArrowSVG from "@public/arrow-left.svg"

// Next
import Image from "next/image"

// Components
import { ArrowContext } from "../CategoryBar"

/**
 * Button that scrolls the `CategoryBar`
 * to the left.
 *
 * @returns `LeftArrow` component
 */
export default function LeftArrow() {
  const arrowStyles = useContext(ArrowContext)
  return (
    <button className={`${arrowStyles} rounded-tl-xl rounded-bl-xl`}>
      <Image src={LeftArrowSVG} alt="Left Arrow" />
    </button>
  )
}
