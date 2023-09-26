"use client"

// React
import { useContext } from "react"

// Next
import Link from "next/link"
import Image, { StaticImageData } from "next/image"

// Components
import SelectionBar from "./components/SelectionBar"
import { IconContext } from "../../../Sidebar"

/**
 * Props for the `LinkIcon` component.
 */
type Props = {
  href: string
  src: StaticImageData
  alt: string
  isSelected: boolean
}

/**
 * Link element with Icon that links to
 * another page in `Sidebar`.
 *
 * @param href relative path to another page
 * @param src source of the image
 * @param alt alternative text for the image
 * @param isSelected boolean determining whether the
 *                   icon is selected
 * @returns `LinkIcon` component
 */
export default function LinkIcon({ href, src, alt, isSelected }: Props) {
  const iconStyles = useContext(IconContext)
  return (
    <Link className={iconStyles} href={href}>
      <Image src={src} alt={alt} />
      {isSelected && <SelectionBar />}
    </Link>
  )
}
