"use client"

// React
import { useRef } from "react"

// SVG
import search from "@public/search-icon.svg"

//Next
import Image from "next/image"

/**
 * A search bar that allows the user
 * to search for a specific product.
 *
 * @returns `SearchBar` component
 */
export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement | null>(null)

  return (
    <div className="flex bg-white drop-shadow-lg rounded-lg p-2 gap-2">
      <Image
        src={search}
        alt="Search Icon"
        width={30}
        height={30}
        onClick={() => inputRef.current?.focus()}
      />
      <input
        className="placeholder:text-neutral-300 text-lg outline-none"
        placeholder="Search product... "
        ref={inputRef}
      />
    </div>
  )
}
