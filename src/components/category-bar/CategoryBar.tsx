"use client"

// Components
import LeftArrow from "./arrows/LeftArrow"
import RightArrow from "./arrows/RightArrow"
import Bars from "./bars/Bars"

// Context
import ArrowContext from "./arrows/ArrowContext"

/**
 * Bar that displays the different
 * categories.
 *
 * @returns `CategoryBar` component
 */
export default function CategoryBar() {
  const arrowStyles = "flex justify-center items-center hover:bg-neutral-100"
  return (
    <section
      className="grid bg-white rounded-xl drop-shadow-md"
      style={{ gridTemplateColumns: "4rem auto 4rem" }}
    >
      <ArrowContext.Provider value={arrowStyles}>
        <LeftArrow />
        <Bars />
        <RightArrow />
      </ArrowContext.Provider>
    </section>
  )
}
