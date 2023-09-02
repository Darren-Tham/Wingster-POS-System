"use client"

// React
import { useRef, type MutableRefObject } from "react"
import { useDraggable } from "react-use-draggable-scroll"

// Components
import Bar from "./Bar"

/**
 * Bars that displays all the
 * categories in `CategoryBars`.
 *
 * @returns `Bars` component
 */
export default function Bars() {
  const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>
  const { events } = useDraggable(ref)

  return (
    <div className="flex overflow-x-auto" {...events}  ref={ref}>
      <Bar name="All" />
      <Bar name="Appetizer" />
      <Bar name="Entrees" />
      <Bar name="Desserts" />
      <Bar name="Drinks" />
    </div>
  )
}
