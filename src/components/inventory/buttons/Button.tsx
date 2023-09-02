"use client"

// Next
import Image, { StaticImageData } from "next/image"

// React
import { useState } from "react"

// Components
import Popup, { PopupButton } from "./popup/Popup"

type Props = {
  src: StaticImageData
  alt: string
  popupButtons: PopupButton[]
  gradientColors: string
  textColor: string
  horizontalDirection: "left" | "right"
}

/**
 * Button that allows the user to
 * perform different actions in
 * the `Inventory` page.
 *
 * @param src source of the image
 * @param alt alternative text for the image
 * @param popupButtons list of objects with the name of
 *                the button and the onclick event
 *                listener
 * @param gradientColors gradient colors of the button
 * @param textColor color of the popup button text
 * @param horizontalDirection the horizontal direction where
 *                            the popup appears
 * @returns `Button` component
 */
export default function Button({
  src,
  alt,
  popupButtons,
  gradientColors,
  textColor,
  horizontalDirection
}: Props) {
  const [showPopup, setShowPopup] = useState(false)
  return (
    <div className="rounded-full relative">
      <button
        className={`bg-gradient-to-br ${gradientColors} rounded-full p-2 drop-shadow-md hover:opacity-95`}
        onClick={() => setShowPopup(true)}
      >
        <Image src={src} alt={alt} width={50} height={50} />
      </button>
      <Popup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        popupButtons={popupButtons}
        textColor={textColor}
        horizontalDirection={horizontalDirection}
      />
    </div>
  )
}
